import { contextBridge, ipcRenderer } from "electron";
import { LoginRequest, LoginResponse, SessionResponse } from "./types/auth";

contextBridge.exposeInMainWorld("proctor", {
  login: (credentials: LoginRequest): Promise<LoginResponse> =>
    ipcRenderer.invoke("auth:login", credentials),
  getSession:():Promise<SessionResponse>=>
    ipcRenderer.invoke("auth:getSession"),
  logout:():Promise<{success:boolean}>=>
    ipcRenderer.invoke("auth:logout"),
  startExam: () =>
    ipcRenderer.invoke("exam:start"),
  endExam: () =>
    ipcRenderer.invoke("exam:end"),
  checkNetwork: () => 
    ipcRenderer.invoke("net:status")

});
