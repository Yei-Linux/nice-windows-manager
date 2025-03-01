import { useWindowsStore } from "../store/windows.store";

export const useSwapgWindowsFrame = () => {
  const sourceWindowsIdSelected = useWindowsStore(
    (store) => store.sourceWindowsIdSelected
  );
  const screensWithWindows = useWindowsStore(
    (store) => store.screensWithWindows
  );
  const setScreenWithWindows = useWindowsStore(
    (store) => store.setScreenWithWindows
  );

  const swap = (destinationWindowsIdSelected: number) => {
    try {
      let sourceItem: any = null;
      let destinationItem: any = null;

      screensWithWindows.forEach((item) => {
        const source = item.windows
          .flat()
          .find((app) => app.id === sourceWindowsIdSelected);
        if (source) sourceItem = source;

        const destination = item.windows
          .flat()
          .find((app) => app.id === destinationWindowsIdSelected);
        if (destination) destinationItem = destination;
      });

      if (!sourceItem || !destinationItem) return;

      const screensWithWindowsCloned = screensWithWindows.map(
        (screenWithWindows) => {
          return {
            ...screenWithWindows,
            windows: screenWithWindows.windows.map((columns) => {
              return columns.map((item) => {
                if (sourceWindowsIdSelected === item.id) {
                  return destinationItem;
                }
                if (destinationWindowsIdSelected === item.id) {
                  return sourceItem;
                }

                return item;
              });
            }),
          };
        }
      );

      setScreenWithWindows(screensWithWindowsCloned);
    } catch (error) {}
  };

  return { swap };
};
