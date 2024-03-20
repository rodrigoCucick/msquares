import BasicWrapperComponent from "@/app/interfaces/BasicWrapperComponent";

export default function MenuItemContainer({children}: BasicWrapperComponent): JSX.Element {
  return (
    <div className="flex pl-4 h-7">
      {children}
    </div>
  );
}
