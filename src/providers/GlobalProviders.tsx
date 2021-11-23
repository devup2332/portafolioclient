import { createContext, useContext } from "react";

const GlobalContext = createContext({});

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};

const GlobalContextProvider = ({ children }: any) => {
  const test = "Works";
  return (
    <GlobalContext.Provider value={{ test }}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
