import { ChangeEvent, useId } from "react";

import { AppAction } from "@/app/enums/AppAction";
import MathUtil from "@/app/util/MathUtil";
import MenuItemContainer from "../menuItemContainer/menuItemContainer";
import { TextInputType } from "@/app/enums/TextInputType";
import useAppState from "@/app/customHooks/useAppState";

interface TextInputInterface {
  type: TextInputType;
  label: string;
  title: string;
  placeholder: string;
  min: number;
  max: number;
  size: number;
}

export default function TextInput({type, label, title, placeholder, min, max, size}: TextInputInterface): JSX.Element {
  const {state, dispatch} = useAppState();
  const textInputId = useId();

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case TextInputType.FIELD_RES:
        const normalizedInt = MathUtil.normalizeInRange(
            Number.parseInt(e.target.value.replace(/[^0-9]/g, '')), state.minFieldRes, state.maxFieldRes);
        e.target.value = String(normalizedInt);
        dispatch({type: AppAction.SET_FIELD_RES, payload: normalizedInt});
    }
  };

  return (
    <MenuItemContainer>
      <label
        htmlFor={textInputId}
        className="mr-2"
        title={title}>
        {label}:
      </label>
      <input
        type="text"
        id={textInputId}
        title={title}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        size={size}
        onBlur={handleOnBlur}
        className="mr-4 rounded hover:shadow-md hover:border-violet focus:border-violet outline-none border-purple-haze border-2" />
    </MenuItemContainer>
  );
}
