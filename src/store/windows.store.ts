import { TWindowsProps, TWindowProp, TScreenProperties } from "../types";
import { create } from "zustand";

export type TScreensWithWindows = Array<{
  screenNumber: number;
  properties: TScreenProperties;
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
  sourceWindowsIdSelected?: number;

  windows: TWindowsProps;
  screensWithWindows: TScreensWithWindows;

  setWindows: (windows: TUseWindowsStore["windows"]) => void;
  setScreenWithWindows: (
    windows: TUseWindowsStore["screensWithWindows"]
  ) => void;
  setSourceWindowsIdSelected: (
    prop: TUseWindowsStore["sourceWindowsIdSelected"]
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
  setSourceWindowsIdSelected: (idSelected) =>
    set((state) => {
      return { sourceWindowsIdSelected: idSelected };
    }),
}));
