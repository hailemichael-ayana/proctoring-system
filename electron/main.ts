import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { LoginRequest, LoginResponse, Session, SessionResponse } from "./types/auth";
import keytar from 'keytar'
import crypto from "crypto";
import Store from 'electron-store'
const isDev = !app.isPackaged;
const SERVICE_NAME ="proctor-app"
const ACCOUNT_NAME="proctor-encryption-key"
function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen:false,
    autoHideMenuBar:true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    win.loadURL("http://localhost:5173");
    // win.webContents.openDevTools();
  } else {
    win.loadFile(
      path.join(__dirname, "../renderer/dist/index.html")
    );
  }
}
async function getEncryptionKey():Promise<string>{
  let key = await keytar.getPassword(SERVICE_NAME,ACCOUNT_NAME)
  if (!key) {
    key=crypto.randomBytes(32).toString("hex")
    await keytar.setPassword(SERVICE_NAME,ACCOUNT_NAME,key)
  }
  return key
}
let store:Store
app.whenReady().then(async () => {
  const encryptionKey = await getEncryptionKey();

  store = new Store({
    name: "proctor-session",
    encryptionKey
  });

  const savedSession = store.get("session");

  if (savedSession) {
    currentSession = savedSession as Session;
  }

  createWindow();
});

let currentSession:Session | null = null
ipcMain.handle(
  "auth:login",
  async (_, credentials: LoginRequest): Promise<LoginResponse> => {
    const { username, password } = credentials;
    console.log("Login bla:", username);
    if (username === "abc" && password === "1234") {
      currentSession = {
        userId:"abc",
        username:"abcuser",
        token:"tokenFromBE"

      }
      return { success: true };
    }

    return {
      success: false,
      message: "Invalid credentials"
    };
  },
);

ipcMain.handle(
  "auth:getSession", async():Promise<SessionResponse | null>=>{
    if (!currentSession) {
      return null
    }
    return {
      userId:currentSession.userId,
      username: currentSession.username
    }

  }
)
ipcMain.handle(
  "auth:logout", async():Promise<{success:boolean}>=>{
    currentSession= null
    return{
      success:true
    }
  }
)
