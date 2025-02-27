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

export type TWindowsProps = Array<TWindowProp>;
