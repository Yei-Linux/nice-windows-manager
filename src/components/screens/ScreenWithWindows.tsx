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
      className={classNames({
        hidden: !isVisible,
      })}
    >
      <Droppable droppableId={screenNumber.toString()}>
        {(provided) => (
          <div
            className="m-auto flex flex-col justify-center min-h-[calc(95vh-60px)] p-4"
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
