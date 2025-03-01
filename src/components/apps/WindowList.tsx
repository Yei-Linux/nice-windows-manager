import { WindowItem } from "./WindowItem";
import { Droppable } from "@hello-pangea/dnd";
import { useWindowsStore } from "../../store/windows.store";
import { useFetchWindows } from "../../hooks/useFetchWindows";

export const WindowList = () => {
  useFetchWindows();
  const windows = useWindowsStore((store) => store.windows);

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
