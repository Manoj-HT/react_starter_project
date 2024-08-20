import { createContext, useState } from "react";
import { ChildrenTypeProps, DataModifierType } from "../types/types";
import ConfigManager from "./ConfigManager";

export const GlobalContextProvider = createContext(
  null as unknown as DataModifierType
);
const GlobalStateManager = ({ children }: ChildrenTypeProps) => {
  const [data, setData] = useState(null as any);
  return (
    <GlobalContextProvider.Provider value={{ data, setData }}>
      <ConfigManager>{children}</ConfigManager>
    </GlobalContextProvider.Provider>
  );
};

export default GlobalStateManager;
