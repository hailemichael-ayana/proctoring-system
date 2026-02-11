import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { LoginRequest, LoginResponse } from "./types/auth";

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

app.whenReady().then(createWindow);
ipcMain.handle(
  "auth:login",
  async (_, credentials: LoginRequest): Promise<LoginResponse> => {
    const { username, password } = credentials;

    console.log("Login bla bla:", username);
    if (username === "abc@gmail.com" && password === "1234") {
      return { success: true };
    }

    return {
      success: false,
      message: "Invalid credentials"
    };
  }
);

