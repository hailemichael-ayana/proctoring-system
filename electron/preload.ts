import { contextBridge, ipcRenderer } from "electron";
import { LoginRequest, LoginResponse } from "./types/auth";

contextBridge.exposeInMainWorld("proctor", {
  login: (credentials: LoginRequest): Promise<LoginResponse> =>
    ipcRenderer.invoke("auth:login", credentials)
});
