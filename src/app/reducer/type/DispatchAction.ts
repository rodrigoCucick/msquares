import { AppAction } from "@/app/enums/AppAction";

export type DispatchAction = {type: AppAction.SET_FIELD_RES; payload: number}
    | {type: AppAction.SET_IS_SHOW_FIELD; payload: boolean}
    | {type: AppAction.SET_IS_SHOW_ISOLINES; payload: boolean}
    | {type: AppAction.SET_IS_ROUNDING_FIELD; payload: boolean}
    | {type: AppAction.GENERATE_NEW_FIELD; payload: null};
