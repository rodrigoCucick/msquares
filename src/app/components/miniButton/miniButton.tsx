import { MiniButtonIconType } from "@/app/enums/MiniButtonIconType";
import RefreshIcon from "../refreshIcon/refreshIcon";

interface MiniButtonInterface {
  miniButtonIconType: MiniButtonIconType;
  title: string;
  onClick: () => void;
}

export default function MiniButton({miniButtonIconType, title, onClick}: MiniButtonInterface): JSX.Element {
  const getMiniButtonIcon = () => {
    switch (miniButtonIconType) {
      case MiniButtonIconType.REFRESH:
        return (<RefreshIcon size={16}></RefreshIcon>);
      default:
        return (<></>);
    }
  }

  return (
    <button
      onClick={onClick}
      title={title}
      className={`
        -translate-x-6
        rounded
        bg-violet
        text-white
        pl-1
        w-7
        h-7
        active:bg-violet
        hover:bg-purple`}>
      {getMiniButtonIcon()}
    </button>
  );
}
