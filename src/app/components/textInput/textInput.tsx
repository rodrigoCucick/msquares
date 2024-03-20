import { ChangeEvent, useId, useState } from "react";

import { AppAction } from "@/app/enums/AppAction";
import MenuItemContainer from "../menuItemContainer/menuItemContainer";
import MiniButton from "../miniButton/miniButton";
import { MiniButtonIconType } from "@/app/enums/MiniButtonIconType";
import { TextInputType } from "@/app/enums/TextInputType";
import useAppState from "@/app/customHooks/useAppState";

interface TextInputInterface {
  type: TextInputType;
  label: string;
  title: string;
  placeholder: string;
  min: number;
  max: number;
  size: number
  hasMiniButton: boolean;
}

export default function TextInput({
    type, label, title, placeholder, min, max, size, hasMiniButton}: TextInputInterface): JSX.Element {
  const {state, dispatch} = useAppState();
  const textInputId = useId();
  const [inputVal, setInputVal] = useState('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case TextInputType.FIELD_RES:
        e.target.value = e.target.value.replace(/^0+/, '').replace(/[^0-9]/g, '');
        setInputVal(e.target.value);
    }
  };

  const getHandleOnClickMiniButton = () => {
    switch (type) {
      case TextInputType.FIELD_RES:
        return () => dispatch({
            type: AppAction.SET_FIELD_RES,
            payload: inputVal == '' ? state.defaultFieldRes : Number.parseInt(inputVal)});
      default:
        return () => {};
    }
  }

  return (
    <MenuItemContainer>
      <label
        htmlFor={textInputId}
        className="mr-2"
        title={title}>
        {label}
      </label>
      <input
        type="text"
        id={textInputId}
        title={title}
        placeholder={placeholder}
        minLength={min}
        maxLength={max}
        size={size}
        onChange={handleOnChange}
        className={`
          rounded
          border-2
          border-purple-haze
          outline-none
          mr-4
          focus:border-violet
          hover:shadow-md
          hover:border-violet`} />
        {hasMiniButton && type == TextInputType.FIELD_RES
            ? <MiniButton miniButtonIconType={MiniButtonIconType.REFRESH} onClick={getHandleOnClickMiniButton()} />
            : ''}
    </MenuItemContainer>
  );
}
