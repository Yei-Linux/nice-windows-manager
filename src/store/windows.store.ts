import { TWindowsProps, TWindowProp } from "../types";
import { create } from "zustand";

export type TScreenProperties = {
  accelerometerSupport: string;
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  colorDepth: number;
  colorSpace: string;
  depthPerComponent: number;
  detected: boolean;
  displayFrequency: number;
  id: number;
  internal: boolean;
  label: string;
  maximumCursorSize: {
    width: number;
    height: number;
  };
  monochrome: boolean;
  nativeOrigin: {
    x: number;
    y: number;
  };
  rotation: number;
  scaleFactor: number;
  size: {
    width: number;
    height: number;
  };
  workArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  workAreaSize: {
    width: number;
    height: number;
  };
  touchSupport: string;
};

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
