import { Allotment } from "allotment";
import { TUseWindowsStore } from "../../store/windows.store";
import { ScreenWindowFrame } from "./ScreenWindowFrame";
import { ScreenWindowsAddColumns } from "./ScreenWindowsAddColumns";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

type TSplitterWindowsFrames = {
  screenWithWindows: TUseWindowsStore["screensWithWindows"][number];
};

export const SplitterWindowsFrames = ({
  screenWithWindows,
}: TSplitterWindowsFrames) => {
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
        console.log("SAME COLUMN", source.index, destination.index);
        return;
      }

      console.log("OTHER COLUMN");
    } catch (error) {}
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col gap-4">
        <div className="bg-white text-black h-full w-full">
          <Allotment className="min-h-[600px]">
            {screenWithWindows.windows.map((column, i) => (
              <Droppable droppableId={i.toString()}>
                {(provided) => (
                  <Allotment.Pane
                    key={i}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="min-h-[600px]"
                  >
                    <Allotment vertical className="min-h-[inherit]">
                      {column.map((item) => (
                        <Allotment.Pane minSize={150} key={item.id}>
                          <ScreenWindowFrame {...item} />
                        </Allotment.Pane>
                      ))}
                    </Allotment>
                  </Allotment.Pane>
                )}
              </Droppable>
            ))}
          </Allotment>
        </div>
        <ScreenWindowsAddColumns
          screenNumber={screenWithWindows.screenNumber}
          columns={screenWithWindows.windows.length}
        />
      </div>
    </DragDropContext>
  );
};
