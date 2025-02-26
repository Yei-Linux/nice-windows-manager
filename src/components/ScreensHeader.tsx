import classNames from "classnames";

type TScreensTabHeader = {
  screens: number;
  setTabIndexActive: (prop: number) => void;
  tabIndexActive: number;
};

export const ScreensTabHeader = ({
  screens,
  setTabIndexActive,
  tabIndexActive,
}: TScreensTabHeader) => {
  return (
    <div className="flex justify-between w-full">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {Array(screens)
          .fill("")
          .map((_, i) => (
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
                Screen {i + 1}
              </button>
            </li>
          ))}
      </ul>

      <button className="bg-sky-500 px-4 py-3 shadow-md rounded-lg cursor-pointer p-0 h-fit">
        Save
      </button>
    </div>
  );
};
