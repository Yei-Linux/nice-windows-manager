import { TWindowsToMove } from "../types";
import { TUseWindowsStore, useWindowsStore } from "../store/windows.store";

export const useComputeDimensions = () => {
  const screensWithWindows = useWindowsStore(
    (store) => store.screensWithWindows
  );

  const getDimensionsPercentFromWindowsByScreen = (
    windowsFromScreen: TUseWindowsStore["screensWithWindows"][number],
    totalWidthOfScreens: number
  ): TWindowsToMove => {
    const screenNumberAllotment = document.querySelector(
      `#allotment_${windowsFromScreen.screenNumber}`
    );
    if (!screenNumberAllotment) return [];

    const width = screenNumberAllotment.clientWidth;
    const height = screenNumberAllotment.clientHeight;
    const realScreenWidth = windowsFromScreen.properties.size.width;
    const realScreenHeight = windowsFromScreen.properties.size.height - 100;

    let previousColumnWidth = 0;

    return windowsFromScreen.windows
      .map((column) => {
        let heightItem = -100;
        const items = column.map((item) => {
          const windowItem = document.querySelector(`#windows_${item.id}`);
          if (!windowItem) return null;

          const widthPercent = +(windowItem.clientWidth / width).toFixed(1);
          const heightPercent = +(windowItem.clientHeight / height).toFixed(1);

          const props = {
            width: +(widthPercent * realScreenWidth).toFixed(0),
            height: +(heightPercent * realScreenHeight).toFixed(0),
            x: totalWidthOfScreens + previousColumnWidth,
            y: heightItem,
            id: item.id,
            pid: item.pid,
            screen: windowsFromScreen.screenNumber,
          };

          heightItem += props.height;

          return props;
        });

        previousColumnWidth = items?.[0].width;

        return items;
      })
      .flat();
  };

  const setDimensionsPercentEveryWindowsApp = async () => {
    try {
      let totalWidthOfScreens = 0;

      const dimensionsComputed = screensWithWindows
        .map((screenWithWindows) => {
          const newDimensions = getDimensionsPercentFromWindowsByScreen(
            screenWithWindows,
            totalWidthOfScreens
          );
          totalWidthOfScreens += screenWithWindows.properties.size.width;
          return newDimensions;
        })
        .flat();

      await (window as any).api.moveWindows(dimensionsComputed);
    } catch (error) {
      console.error(error);
    }
  };

  return { setDimensionsPercentEveryWindowsApp };
};
