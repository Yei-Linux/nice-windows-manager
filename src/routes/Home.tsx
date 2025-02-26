import { WindowsManager } from "../components/WindowsManager";
import { WindowList } from "../components/WindowList";
import { DragDropContext } from "@hello-pangea/dnd";

export const Homepage = () => {
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="min-w-full min-h-screen flex items-center bg-[#2b2727]">
        <div className="min-w-[300px] bg-white min-h-screen p-4">
          <h3 className="mb-4 text-xl font-[excalifont]">Your opened apps</h3>
          <WindowList />
        </div>

        <div className="w-full min-h-screen p-4">
          <WindowsManager screens={3} />
        </div>
      </div>
    </DragDropContext>
  );
};
