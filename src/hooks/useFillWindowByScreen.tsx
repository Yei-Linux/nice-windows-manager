import { useEffect } from "react";
import { TScreenProperties, useWindowsStore } from "../store/windows.store";

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
