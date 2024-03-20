import { createContext, useReducer } from "react";

import AppStateCreateContext from "@/app/interfaces/AppStateCreateContext";
import appStateReducer from "@/app/reducer/appStateReducer";
import BasicWrapperComponent from "@/app/interfaces/BasicWrapperComponent";
import { initialAppState } from "@/app/reducer/initialAppState";

export const AppStateContext = createContext<AppStateCreateContext | undefined>(undefined);

export const AppStateProvider = ({children}: BasicWrapperComponent): JSX.Element => {
  const [state, dispatch] = useReducer(appStateReducer, initialAppState);

  return (
    <AppStateContext.Provider value={{state, dispatch}}>
      {children}
    </AppStateContext.Provider>
  );
}
