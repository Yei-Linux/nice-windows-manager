import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getWindows: (args: unknown) => ipcRenderer.invoke("get-macos-windows", args),
});
