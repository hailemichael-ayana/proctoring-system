import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { LoginRequest, LoginResponse, Session, SessionResponse } from "./types/auth";

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 800,
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

let currentSession:Session | null = null
app.whenReady().then(createWindow);
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
