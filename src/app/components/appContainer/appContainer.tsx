import BasicWrapperComponent from "@/app/interfaces/BasicWrapperComponent";

export default function AppContainer({children}: BasicWrapperComponent): JSX.Element {
  return (
    <div className="mt-6 mb-6 flex justify-center">
      <div className="flex rounded-l-xl border border-cream">
        {children}
      </div>
    </div>
  );
}
