import { useEffect, useState } from "react";
import { TScreenProperties } from "../store/windows.store";

export const useFetchNumberOfScreens = () => {
  const [screens, setScreens] = useState<Array<TScreenProperties>>([]);

  const handleFettchNumberScreens = async () => {
    try {
      const response = await (window as any).api.getNumberOfScreens();
      setScreens(response);
    } catch (error) {}
  };

  useEffect(() => {
    handleFettchNumberScreens();
  }, []);

  return { screens };
};
