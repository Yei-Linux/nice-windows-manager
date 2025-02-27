import { useEffect, useState } from "react";
import { WindowItem } from "./WindowItem";
import { Droppable } from "@hello-pangea/dnd";
import { useWindowsStore } from "../../store/windows.store";

export const WindowList = () => {
  const windows = useWindowsStore((store) => store.windows);
  const setWindows = useWindowsStore((store) => store.setWindows);

  const handleFetchWindows = async () => {
    const response = await (window as any).api.getWindows();
    setWindows(response);
  };

  useEffect(() => {
    handleFetchWindows();
  }, []);

  return (
    <Droppable droppableId="apps">
      {(provided) => (
        <ul
          className="h-full flex flex-col gap-4 h-full"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {windows?.map((windowItem) => (
            <WindowItem
              {...windowItem}
              key={`${windowItem.id}_${windowItem.title}`}
            />
          ))}
        </ul>
      )}
    </Droppable>
  );
};
