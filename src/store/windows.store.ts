import { TWindowsProps, TWindowProp } from "../types";
import { create } from "zustand";

export type TScreensWithWindows = Array<{
  screenNumber: number;
  windows: Array<
    Array<
      Pick<
        TWindowProp,
        "id" | "pid" | "app" | "title" | "icon" | "frame" | "display" | "order"
      >
    >
  >;
}>;

export type TUseWindowsStore = {
  windows: TWindowsProps;
  screensWithWindows: TScreensWithWindows;

  setWindows: (windows: TUseWindowsStore["windows"]) => void;
  setScreenWithWindows: (
    windows: TUseWindowsStore["screensWithWindows"]
  ) => void;
};

export const useWindowsStore = create<TUseWindowsStore>((set) => ({
  windows: [],
  screensWithWindows: [],
  setWindows: (windows) =>
    set((state) => ({
      windows,
    })),
  setScreenWithWindows: (screensWithWindows) =>
    set((state) => ({
      screensWithWindows,
    })),
}));
