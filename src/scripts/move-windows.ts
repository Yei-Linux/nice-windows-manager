import { exec } from "node:child_process";
import { TWindowsToMove } from "../types";

export const moveWindowItem = ({
  id,
  screen,
  x,
  y,
  width,
  height,
}: TWindowsToMove[number]) => {
  return new Promise((res, rej) => {
    exec(
      `yabai -m window ${id} --toggle zoom-parent && yabai -m window ${id} --resize abs:${width}:${height} && yabai -m window ${id} --move abs:${x}:${y}`,
      (err, stdout, stderr) => {
        if (err) {
          console.error("Error moving a window:", stderr);
          res(id);
          return;
        }

        res(id);
      }
    );
  });
};

export const moveWindows = async (
  _: unknown,
  windowsToMove: TWindowsToMove
) => {
  let windowIdsMoved = [];
  for (const item of windowsToMove) {
    try {
      const id = await moveWindowItem(item);
      windowIdsMoved.push(id);
    } catch (error) {}
  }

  console.log("Window ids moved: ", windowIdsMoved);
  return windowIdsMoved;
};
