import { getAppIconBase64 } from "./add-app-icon";
import { getWindows } from "./get-all-windows";

export const handleGetMacosWindows = async () => {
  try {
    const windows = await getWindows();
    const windowsWithIcons = await Promise.all(
      windows.map(async (window, i) => getAppIconBase64(window, i))
    );

    return windowsWithIcons;
  } catch (error) {
    return [];
  }
};
