import { useEffect } from "react";
import { useWindowsStore } from "../store/windows.store";

export const useFetchWindows = () => {
  const setWindows = useWindowsStore((store) => store.setWindows);

  const handleFetchWindows = async () => {
    const response = await (window as any).api.getWindows();
    setWindows(response);
  };

  useEffect(() => {
    handleFetchWindows();
  }, []);

  return {};
};
