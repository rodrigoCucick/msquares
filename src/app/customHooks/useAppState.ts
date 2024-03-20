import { useContext } from "react";

import { AppStateContext } from "../components/appStateProvider/appStateProvider";
import AppStateCreateContext from "../interfaces/AppStateCreateContext";

export default function useAppState(): AppStateCreateContext {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider.");
  }
  return context;
}
