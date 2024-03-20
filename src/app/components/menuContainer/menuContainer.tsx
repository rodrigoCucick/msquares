import BasicWrapperComponent from "@/app/interfaces/BasicWrapperComponent";

export default function MenuContainer({children}: BasicWrapperComponent): JSX.Element {
  return (
    <div className="justify-center bg-white rounded-l-lg pt-4 bg-cream">
      {children}
    </div>
  );
}
