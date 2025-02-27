import { useEffect, useState } from "react";
import { ScreensTabHeader } from "./ScreensHeader";
import { ScreenWithWindows } from "./ScreenWithWindows";
import { useWindowsStore } from "../../store/windows.store";

type TWindowsManager = {
  screens: number;
};

export const WindowsManager = ({ screens }: TWindowsManager) => {
  const [tabIndexActive, setTabIndexActive] = useState(0);
  const setScreenWithWindows = useWindowsStore(
    (store) => store.setScreenWithWindows
  );

  useEffect(() => {
    setScreenWithWindows(
      Array(screens)
        .fill("")
        .map((_, i) => ({
          screenNumber: i + 1,
          windows: [],
        }))
    );
  }, []);

  return (
    <div className="w-full min-h-[95vh] font-[excalifont] text-white">
      <ScreensTabHeader
        tabIndexActive={tabIndexActive}
        setTabIndexActive={setTabIndexActive}
        screens={screens}
      />

      <ScreenWithWindows screenNumber={1} isVisible={tabIndexActive === 0} />
      <ScreenWithWindows screenNumber={2} isVisible={tabIndexActive === 1} />
      <ScreenWithWindows screenNumber={3} isVisible={tabIndexActive === 2} />
    </div>
  );
};
