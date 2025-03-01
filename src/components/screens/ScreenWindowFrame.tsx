import { useSwapgWindowsFrame } from "../../hooks/useSwapWindowsFrame";
import {
  TScreensWithWindows,
  useWindowsStore,
} from "../../store/windows.store";
import classNames from "classnames";

type TWindosScreen = TScreensWithWindows[number]["windows"][number][number];

export const ScreenWindowFrame = ({
  id,
  pid,
  title,
  app,
  icon,
  frame,
  display,
}: TWindosScreen) => {
  const { swap } = useSwapgWindowsFrame();
  const sourceWindowsIdSelected = useWindowsStore(
    (store) => store.sourceWindowsIdSelected
  );
  const setSourceWindowsIdSelected = useWindowsStore(
    (store) => store.setSourceWindowsIdSelected
  );

  const handleClickSelection = () => {
    if (sourceWindowsIdSelected) {
      swap(id);
      setSourceWindowsIdSelected(undefined);
      return;
    }
    setSourceWindowsIdSelected(id);
  };

  return (
    <div
      className={classNames(
        "flex flex-col gap-1 bg-zinc-50 text-black justify-center items-center rounded-md p-3 w-full min-h-[100%] cursor-pointer hover:border-4 hover:border hover:border-purple-600",
        {
          "border-4 border border-purple-600": sourceWindowsIdSelected === id,
        }
      )}
      onClick={handleClickSelection}
      id={`windows_${id}`}
    >
      <img src={icon} width={50} height={50} />
      <h3 className="text-md font-bold">{app}</h3>{" "}
      <p className="text-xs max-w-[350px] overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </p>
    </div>
  );
};
