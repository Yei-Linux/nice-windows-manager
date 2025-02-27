import { Draggable } from "@hello-pangea/dnd";
import { TScreensWithWindows } from "../../store/windows.store";
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
  return (
    <>
      <Draggable draggableId={id.toString()} index={id} key={id}>
        {(provided, snapshot) => (
          <div
            className={classNames(
              "flex flex-col gap-1 bg-zinc-50 text-black justify-center items-center rounded-md p-3 w-full min-h-[100%]",
              {
                "!min-h-[auto] !max-h-[auto] !max-w-[auto]":
                  snapshot.isDragging,
              }
            )}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <img src={icon} width={50} height={50} />
            <h3 className="text-md font-bold">{app}</h3>{" "}
            <p className="text-xs max-w-[350px] overflow-hidden whitespace-nowrap text-ellipsis">
              {title}
            </p>
          </div>
        )}
      </Draggable>
    </>
  );
};
