import React, { createContext, useState } from "react";

interface AppContextInterface {
  preset: string;
  enterAnimation: string | null;
  exitAnimation: string | null;
  setPreset: React.Dispatch<string>;
  setEnterAnimation: React.Dispatch<string>;
  setExitAnimation: React.Dispatch<string>;
}

const AppContext = createContext<AppContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
}

function AppContextProvider({ children }: Props) {
  const [preset, setPreset] = useState("roomToBottom");
  const [enterAnimation, setEnterAnimation] = useState("");
  const [exitAnimation, setExitAnimation] = useState("");

  const appContext: AppContextInterface = {
    preset,
    enterAnimation,
    exitAnimation,
    setPreset,
    setEnterAnimation,
    setExitAnimation
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
