import { Droppable } from "@hello-pangea/dnd";
import { useWindowsStore } from "../../store/windows.store";
import { ScreenWindowFrame } from "./ScreenWindowFrame";
import classNames from "classnames";
import { SplitterWindowsFrames } from "./SplitterWindowsFrames";

type TScreenWithWindows = {
  screenNumber: number;
  isVisible: boolean;
};

export const ScreenWithWindows = ({
  screenNumber,
  isVisible,
}: TScreenWithWindows) => {
  const screensWithWindows = useWindowsStore(
    (store) => store.screensWithWindows
  );

  const screenWithWindows = screensWithWindows.find(
    ({ screenNumber: screen }) => screen === screenNumber
  );

  return (
    <div
      className={classNames(
        "absolute inset-0 min-h-[calc(95vh-60px)] min-w-[100%] bg-[#2b2727]",
        {
          "z-[-1]": !isVisible,
          "z-[10]": isVisible,
        }
      )}
    >
      <Droppable
        droppableId={screenNumber.toString()}
        isDropDisabled={!isVisible}
      >
        {(provided) => (
          <div
            className="m-auto flex flex-col min-h-[100%] justify-center p-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {!!screenWithWindows?.windows.length ? (
              <SplitterWindowsFrames screenWithWindows={screenWithWindows} />
            ) : (
              <p className="text-center">
                Please drag any of your apps to adjust it...
              </p>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};
