import { DropResult } from "@hello-pangea/dnd";
import { useWindowsStore } from "../store/windows.store";

export const useDndWindowsFromLeft = () => {
  const windows = useWindowsStore((store) => store.windows);
  const setWindows = useWindowsStore((store) => store.setWindows);
  const screensWithWindows = useWindowsStore(
    (store) => store.screensWithWindows
  );
  const setScreenWithWindows = useWindowsStore(
    (store) => store.setScreenWithWindows
  );

  const handleDragEnd = (results: DropResult<string>) => {
    try {
      const { source, destination, type } = results;
      if (type === "COLUMN") return;
      if (!destination) return;

      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      )
        return;

      const sourceIndex = source.index;
      const destinationIndex = +destination.droppableId;

      if (source.droppableId === destination.droppableId) {
        return;
      }

      const windowDragged = windows.find(({ id }) => id === sourceIndex);
      if (!windowDragged) return;

      const windowsUpdated = windows.filter(({ id }) => id !== sourceIndex);
      setWindows(windowsUpdated);

      const screensWithWindowsUpdated = screensWithWindows.map((item) => {
        if (item.screenNumber !== destinationIndex) return item;

        let windowsCloned = item.windows.slice();
        if (!windowsCloned?.[0]) {
          windowsCloned = [[]];
        }

        windowsCloned[0].push(windowDragged);

        return {
          ...item,
          windows: windowsCloned,
        };
      });

      setScreenWithWindows(screensWithWindowsUpdated);
    } catch (error) {}
  };

  return { handleDragEnd };
};
