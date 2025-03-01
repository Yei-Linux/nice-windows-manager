export type TWindowProp = {
  id: number;
  pid: number;
  app: string;
  title: string;
  scratchpad: string;
  frame: { x: number; y: number; w: number; h: number };
  role: string;
  subrole: string;
  "root-window": boolean;
  display: number;
  space: number;
  level: number;
  "sub-level": number;
  layer: string;
  "sub-layer": string;
  opacity: number;
  icon?: string;
  order: number;
};

export type TWindowsToMove = Array<{
  x: number;
  y: number;
  id: number;
  pid: number;
  screen: number;
  width: number;
  height: number;
}>;

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

export type TWindowsProps = Array<TWindowProp>;
