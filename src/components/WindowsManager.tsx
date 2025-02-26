import { Droppable } from "@hello-pangea/dnd";
import { useState } from "react";
import { ScreensTabHeader } from "./ScreensHeader";

type TWindowsManager = {
  screens: number;
};

export const WindowsManager = ({ screens }: TWindowsManager) => {
  const [tabIndexActive, setTabIndexActive] = useState(1);

  return (
    <div className="w-full min-h-[95vh] font-[excalifont] text-white">
      <ScreensTabHeader
        tabIndexActive={tabIndexActive}
        setTabIndexActive={setTabIndexActive}
        screens={screens}
      />

      <Droppable droppableId="screen1">
        {(provided) => (
          <div
            className="m-auto flex flex-col justify-center min-h-[calc(95vh-60px)] p-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <p className="text-center">
              Please drag any of your apps to adjust it...
            </p>
          </div>
        )}
      </Droppable>
    </div>
  );
};
