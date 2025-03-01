import { useEffect } from "react";
import { useWindowsStore } from "../store/windows.store";
import { TScreenProperties } from "../types";

type TUseFillWindowsByScreen = {
  screens: Array<TScreenProperties>;
};

export const useFillWindowsByScreen = ({
  screens,
}: TUseFillWindowsByScreen) => {
  const setScreenWithWindows = useWindowsStore(
    (store) => store.setScreenWithWindows
  );

  useEffect(() => {
    setScreenWithWindows(
      screens.map((properties, i) => ({
        screenNumber: i + 1,
        windows: [],
        properties,
      }))
    );
  }, [screens.length]);
};
