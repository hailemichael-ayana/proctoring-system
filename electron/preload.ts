import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("proctor", {
  version: "0.1.0"
});
