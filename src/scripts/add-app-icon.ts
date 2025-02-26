import { fileIconToBuffer } from "file-icon";
import { TWindowProp } from "../types";

export const getAppIconBase64 = async (window: TWindowProp) => {
  try {
    const buffer = await fileIconToBuffer(window.pid);
    const base64Icon = "data:image/png;base64," + buffer.toString("base64");

    return { ...window, icon: base64Icon };
  } catch (error) {
    return window;
  }
};
