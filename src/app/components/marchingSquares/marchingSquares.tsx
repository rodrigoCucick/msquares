import DrawUtil from "@/app/util/DrawUtil";
import useAppState from "@/app/customHooks/useAppState";
import useCanvas from "@/app/customHooks/useCanvas";

export default function MarchingSquares(): JSX.Element {
  const {state} = useAppState();
  
  // TODO - Add filled field drawing.
  const draw = (ctx: CanvasRenderingContext2D): void => {
    DrawUtil.clearScreen(ctx, "black");
  
    if (state.isShowField) {
      DrawUtil.drawField(ctx, state);
    }
  
    if (state.isShowIsolines) {
      DrawUtil.drawIsolines(ctx, state);
    }
  };

  return (
    <canvas
      ref={useCanvas(draw)}
      width={state.canvasWidth}
      height={state.canvasHeight}>
    </canvas>
  );
}
