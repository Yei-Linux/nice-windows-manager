import { useState } from "react";
import { ScreensTabHeader } from "./ScreensHeader";
import { ScreenWithWindows } from "./ScreenWithWindows";
import { useFillWindowsByScreen } from "../../hooks/useFillWindowByScreen";
import { TScreenProperties } from "../../types";

type TWindowsManager = {
  screens: Array<TScreenProperties>;
};

export const WindowsManager = ({ screens }: TWindowsManager) => {
  useFillWindowsByScreen({ screens });
  const [tabIndexActive, setTabIndexActive] = useState(0);

  return (
    <div className="w-full min-h-[95vh] font-[excalifont] text-white">
      <ScreensTabHeader
        tabIndexActive={tabIndexActive}
        setTabIndexActive={setTabIndexActive}
        screens={screens}
      />

      <div className="relative">
        {screens.map((_, i) => (
          <ScreenWithWindows
            key={i}
            screenNumber={i + 1}
            isVisible={tabIndexActive === i}
          />
        ))}
      </div>
    </div>
  );
};
