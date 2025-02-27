import { TUseWindowsStore, useWindowsStore } from "../../store/windows.store";

type TScreenWindowsAddColumns = { screenNumber: number; columns: number };

export const ScreenWindowsAddColumns = ({
  screenNumber,
  columns,
}: TScreenWindowsAddColumns) => {
  const setScreenWithWindows = useWindowsStore(
    (store) => store.setScreenWithWindows
  );
  const screensWithWindows = useWindowsStore(
    (store) => store.screensWithWindows
  );

  const windowsResortedRemoveColumn = (
    windows: TUseWindowsStore["screensWithWindows"][number]["windows"]
  ) => {
    let windowsCloned = windows.slice();
    const lastColumn = windowsCloned.pop();

    if (!windowsCloned.length) return windows;

    if (windowsCloned[windowsCloned.length - 1]) {
      windowsCloned[windowsCloned.length - 1] =
        windowsCloned[windowsCloned.length - 1].concat(lastColumn);
    }

    return windowsCloned;
  };

  const windowsResortedAddNewColumn = (
    windows: TUseWindowsStore["screensWithWindows"][number]["windows"]
  ) => {
    let windowsCloned = windows.slice();

    while (windowsCloned.length > 0) {
      const lastColumn = windowsCloned.pop();
      if (lastColumn.length > 1) {
        const lastWindow = lastColumn.pop();

        const newWindows = windows.map((column) =>
          column.filter(({ id }) => id !== lastWindow.id)
        );
        newWindows.push([lastWindow]);

        return newWindows;
      }
    }

    return windows;
  };

  const changeColumns = (type: "add" | "remove") => {
    const screensWithWindowsUpdated = screensWithWindows.map(
      (screenWithWindows) => {
        if (screenNumber !== screenWithWindows.screenNumber)
          return screenWithWindows;

        const windowsUpdated =
          type === "add"
            ? windowsResortedAddNewColumn(screenWithWindows.windows)
            : windowsResortedRemoveColumn(screenWithWindows.windows);

        return {
          ...screenWithWindows,
          windows: windowsUpdated,
        };
      }
    );

    setScreenWithWindows(screensWithWindowsUpdated);
  };

  return (
    <div className="flex gap-3">
      <button
        className="bg-sky-500 rounded-full w-[20px] h-[20px] p-0 cursor-pointer"
        onClick={() => changeColumns("remove")}
      >
        -
      </button>
      <span>Columns: {columns}</span>
      <button
        className="bg-sky-500 rounded-full w-[20px] h-[20px] p-0 cursor-pointer"
        onClick={() => changeColumns("add")}
      >
        +
      </button>
    </div>
  );
};
