import { ChangeEvent, useId } from "react";

import { AppAction } from "@/app/enums/AppAction";
import { CheckboxType } from "@/app/enums/CheckboxType";
import MenuItemContainer from "../menuItemContainer/menuItemContainer";
import useAppState from "@/app/customHooks/useAppState";

interface CheckboxInterface {
  type: CheckboxType;
  label: string;
  title: string;
}

export default function Checkbox({type, label, title}: CheckboxInterface): JSX.Element {
  const {state, dispatch} = useAppState();
  const checkboxId = useId();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    switch (type) {
      case CheckboxType.IS_SHOW_FIELD:
        dispatch({type: AppAction.SET_IS_SHOW_FIELD, payload: e.target.checked});
        break;
      case CheckboxType.IS_SHOW_ISOLINES:
        dispatch({type: AppAction.SET_IS_SHOW_ISOLINES, payload: e.target.checked});
        break;
      case CheckboxType.IS_ROUNDING_FIELD:
        dispatch({type: AppAction.SET_IS_ROUNDING_FIELD, payload: e.target.checked});
    }
  };

  const getCheckedState = (): boolean => {
    switch (type) {
      case CheckboxType.IS_SHOW_FIELD: 
        return state.isShowField;
      case CheckboxType.IS_SHOW_ISOLINES:
        return state.isShowIsolines;
      case CheckboxType.IS_ROUNDING_FIELD:
        return state.isRoundingField;
      default:
        return false;
    }
  };

  return (
    <MenuItemContainer>
      <label
        htmlFor={checkboxId}
        title={title}
        className="mr-2 cursor-pointer">
        {label}
      </label>
      <input
        type="checkbox"
        id={checkboxId}
        title={title}
        checked={getCheckedState()}
        onChange={handleOnChange}
        className="mr-4 hover:shadow-md accent-violet cursor-pointer" />
    </MenuItemContainer>
  );
}
