import { RefObject, useEffect, useRef } from "react";

export default function useCanvas(
    draw: (ctx: CanvasRenderingContext2D) => void): RefObject<HTMLCanvasElement> {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    // TODO - Add animation loop to render field motion (metaballs, etc).
    draw(ctx);
  }, [draw]);

  return canvasRef;
}
