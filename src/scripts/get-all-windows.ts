import { exec } from "node:child_process";
import { TWindowsProps } from "../types";

export const getWindows = (): Promise<TWindowsProps> => {
  return new Promise((resolve, reject) => {
    exec("yabai -m query --windows", (error, stdout) => {
      if (error) reject(error);
      const windows = JSON.parse(stdout);
      resolve(windows as TWindowsProps);
    });
  });
};
