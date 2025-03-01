import { Allotment } from "allotment";
import { TUseWindowsStore } from "../../store/windows.store";
import { ScreenWindowFrame } from "./ScreenWindowFrame";
import { ScreenWindowsAddColumns } from "./ScreenWindowsAddColumns";

type TSplitterWindowsFrames = {
  screenWithWindows: TUseWindowsStore["screensWithWindows"][number];
};

export const SplitterWindowsFrames = ({
  screenWithWindows,
}: TSplitterWindowsFrames) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white text-black h-full w-full">
        <Allotment
          className="min-h-[600px]"
          id={`allotment_${screenWithWindows.screenNumber}`}
        >
          {screenWithWindows.windows.map((column, i) => (
            <Allotment.Pane key={i} className="min-h-[600px]">
              <Allotment vertical className="min-h-[inherit] bg-transparent">
                {column.map((item) => (
                  <Allotment.Pane minSize={150} key={item.id}>
                    <ScreenWindowFrame {...item} />
                  </Allotment.Pane>
                ))}
              </Allotment>
            </Allotment.Pane>
          ))}
        </Allotment>
      </div>

      <ScreenWindowsAddColumns
        screenNumber={screenWithWindows.screenNumber}
        columns={screenWithWindows.windows.length}
      />
    </div>
  );
};
