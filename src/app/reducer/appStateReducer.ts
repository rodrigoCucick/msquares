import { AppAction } from "../enums/AppAction";
import AppState from "../interfaces/AppState";
import ArrayUtil from "../util/ArrayUtil";
import { DispatchAction } from "./type/DispatchAction";

export default function appStateReducer(state: AppState, action: DispatchAction) {
  switch (action.type) {
    case AppAction.SET_FIELD_RES:
      return {...state, fieldRes: action.payload};
    case AppAction.SET_IS_SHOW_FIELD:
      return {...state, isShowField: action.payload};
    case AppAction.SET_IS_SHOW_ISOLINES:
      return {...state, isShowIsolines: action.payload};
    case AppAction.SET_IS_ROUNDING_FIELD:
      return {...state, isRoundingField: action.payload};
    case AppAction.GENERATE_NEW_FIELD:
      return {...state, field: ArrayUtil.generateRandomNumber2DArray(state.field.length, state.field[0].length)};
    default:
      throw new Error("Dispatcher was called with an unimplemented action.");
  }
}
