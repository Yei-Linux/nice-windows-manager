import { WindowsManager } from "../components/screens";
import { WindowList } from "../components/apps/WindowList";
import { DragDropContext } from "@hello-pangea/dnd";
import { useDndWindowsFromLeft } from "../hooks/useDndWindowsFromLeft";
import { useFetchNumberOfScreens } from "../hooks/useFetchNumberOfScreens";

export const Homepage = () => {
  const { handleDragEnd } = useDndWindowsFromLeft();
  const { screens } = useFetchNumberOfScreens();

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="min-w-full min-h-screen flex items-center bg-[#2b2727]">
        <div className="min-w-[300px] bg-white min-h-screen p-4">
          <h3 className="mb-4 text-xl font-[excalifont]">Your opened apps</h3>
          <WindowList />
        </div>

        <div className="w-full min-h-screen p-4">
          <WindowsManager screens={screens} />
        </div>
      </div>
    </DragDropContext>
  );
};
