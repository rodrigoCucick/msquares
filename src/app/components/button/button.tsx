import { AppAction } from "@/app/enums/AppAction";
import { ButtonType } from "@/app/enums/ButtonType";
import MenuItemContainer from "../menuItemContainer/menuItemContainer";
import useAppState from "@/app/customHooks/useAppState";

interface ButtonInterface {
  type: ButtonType;
  label: string;
  title: string;
}

export default function Button({type, label, title}: ButtonInterface): JSX.Element {
  const {dispatch} = useAppState();

  const handleClick = (): void => {
    switch (type) {
      case ButtonType.GENERATE_NEW_FIELD:
        dispatch({type: AppAction.GENERATE_NEW_FIELD, payload: null});
    }
  };

  return (
    <MenuItemContainer>
      <button
        title={title}
        onClick={handleClick}
        className={`
          justify-center
          rounded
          bg-violet
          text-white
          w-44
          h-7
          active:bg-violet
          hover:bg-purple`}>
        {label}
      </button>
    </MenuItemContainer>
  );
}
