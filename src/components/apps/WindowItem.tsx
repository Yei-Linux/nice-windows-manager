import { Draggable } from "@hello-pangea/dnd";
import { TWindowProp } from "../../types";

export const WindowItem = ({ title, app, icon, id }: TWindowProp) => {
  return (
    <Draggable draggableId={id.toString()} index={id} key={id}>
      {(provided) => (
        <li
          className="flex gap-3 shadow-sm rounded-md p-2 cursor-pointer bg-zinc-50"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <img src={icon} width={50} height={50} />
          <div className="flex flex-col">
            <p className="font-bold font-[excalifont]">{app}</p>
            <p className="text-xs max-w-[150px] overflow-hidden whitespace-nowrap text-ellipsis">
              {title}
            </p>
          </div>
        </li>
      )}
    </Draggable>
  );
};
