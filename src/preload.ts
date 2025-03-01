import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getWindows: (args: unknown) => ipcRenderer.invoke("get-macos-windows", args),
  getNumberOfScreens: (args: unknown) =>
    ipcRenderer.invoke("get-number-of-screens", args),
  moveWindows: (args: unknown) => ipcRenderer.invoke("move-windows", args),
});
