import classNames from "classnames";
import { useWindowsStore } from "../../store/windows.store";
import { useComputeDimensions } from "../../hooks/useComputeDimensions";
import { TScreenProperties } from "../../types";

type TScreensTabHeader = {
  screens: TScreenProperties[];
  setTabIndexActive: (prop: number) => void;
  tabIndexActive: number;
};

export const ScreensTabHeader = ({
  screens,
  setTabIndexActive,
  tabIndexActive,
}: TScreensTabHeader) => {
  const screensWithWindows = useWindowsStore(
    (store) => store.screensWithWindows
  );
  const { setDimensionsPercentEveryWindowsApp } = useComputeDimensions();

  const totalWindowsSelected = screensWithWindows
    .map((item) => item.windows)
    .flat()
    .flat().length;

  return (
    <div className="flex justify-between w-full">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {screens.map((screen, i) => (
          <li className="me-2" key={i}>
            <button
              onClick={() => setTabIndexActive(i)}
              className={classNames(
                "cursor-pointer inline-block p-4 bg-black text-white rounded-t-lg",
                {
                  "bg-white !text-black": tabIndexActive === i,
                }
              )}
            >
              Screen {i + 1} ({screen.label})
            </button>
          </li>
        ))}
      </ul>

      <button
        className={classNames(
          "bg-sky-500 px-4 py-3 shadow-md rounded-lg cursor-pointer p-0 h-fit",
          {
            "cursor-not-allowed opacity-50": totalWindowsSelected < 2,
          }
        )}
        disabled={totalWindowsSelected < 2}
        onClick={setDimensionsPercentEveryWindowsApp}
      >
        Save
      </button>
    </div>
  );
};
