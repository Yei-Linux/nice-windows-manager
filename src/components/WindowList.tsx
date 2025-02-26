import { useEffect, useState } from "react";
import { WindowItem } from "../components/WindowItem";
import { Droppable } from "@hello-pangea/dnd";

export const WindowList = () => {
  const [windows, setWindows] = useState([]);

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
          {windows.map((windowItem) => (
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
