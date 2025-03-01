import { screen } from "electron";

export const getNumberOfScreens = () => {
  return screen.getAllDisplays();
};
