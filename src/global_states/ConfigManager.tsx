import { createContext, useEffect, useState } from "react";
import { ChildrenTypeProps, ConfigType } from "../types/types";

export const ConfigProvider = createContext(null as unknown as ConfigType);
const ConfigManager = ({ children }: ChildrenTypeProps) => {
  const [config, setConfig] = useState(null as unknown as ConfigType);
  const getConfig = () => {
    fetch;
    setConfig;
  };
  useEffect(() => {
    getConfig();
  }, []);
  return (
    <ConfigProvider.Provider value={config}>{children}</ConfigProvider.Provider>
  );
};

export default ConfigManager;
