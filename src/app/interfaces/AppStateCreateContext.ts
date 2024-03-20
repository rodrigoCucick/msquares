import AppState from "./AppState";
import { DispatchAction } from "../reducer/type/DispatchAction";

export default interface AppStateCreateContext {
  state: AppState;
  dispatch: React.Dispatch<DispatchAction>;
}
