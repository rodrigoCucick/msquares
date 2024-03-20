import AppState from "../interfaces/AppState";
import LineSegment from "../interfaces/LineSegment";
import MathUtil from "./MathUtil";
import { Midpoint } from "../enums/Midpoint";
import Point2D from "../interfaces/Point2D";

export default class DrawUtil {
  /**
   * Fills the whole canvas with the specified color (fill style).
   * 
   * @param {CanvasRenderingContext2D} ctx The rendering context of the target canvas.   
   * @param {string | CanvasGradient | CanvasPattern} fillStyle The fill style to be used when filling the canvas.  
   */
  public static clearScreen(ctx: CanvasRenderingContext2D,
      fillStyle: string | CanvasGradient | CanvasPattern): void {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  /**
   * Draws a basic, 1px wide, white line segment on the target canvas,
   * from a previously built line segment, from point A (p1) to point B (p2).
   * 
   * @param {CanvasRenderingContext2D} ctx The rendering context of the target canvas.
   * @param {LineSegment} lineSegment The line segment with its p1 and p2 components (Point2D).
   */
  public static drawLineSegment(ctx: CanvasRenderingContext2D, lineSegment: LineSegment): void {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(lineSegment.p1.x, lineSegment.p1.y);
    ctx.lineTo(lineSegment.p2.x, lineSegment.p2.y);
    ctx.stroke();
  }

  /**
   * Draws a representation of the field with circles.
   * 
   * @param {CanvasRenderingContext2D} ctx The rendering context of the target canvas.
   * @param {AppState} state The global states of the application.
   */
  public static drawField(ctx: CanvasRenderingContext2D, state: AppState): void {
    const fieldWidth = (state.canvasWidth / state.fieldRes) + 1;
    const fieldHeight = (state.canvasHeight / state.fieldRes) + 1;

    for (let fieldY = 0; fieldY < fieldHeight; fieldY++) {
      for (let fieldX = 0; fieldX < fieldWidth; fieldX++) {
        const canvasX = fieldX * state.fieldRes;
        const canvasY = fieldY * state.fieldRes;

        const color = (state.isRoundingField
            ? Math.round(state.field[fieldX][fieldY])
            : state.field[fieldX][fieldY]) * 255;
        
        ctx.fillStyle = `rgb(${color},${color},${color})`;
        ctx.beginPath();
        ctx.arc(canvasX, canvasY, state.fieldRes * 0.15, 0, MathUtil.TWO_PI);
        ctx.fill();
      }
    }
  }

  /**
   * Draws the field's isolines (contours).
   * 
   * @param {CanvasRenderingContext2D} ctx The rendering context of the target canvas.
   * @param {AppState} state The global states of the application.
   */
  public static drawIsolines(ctx: CanvasRenderingContext2D, state: AppState): void {
    const fieldWidth = (state.canvasWidth / state.fieldRes) + 1;
    const fieldHeight = (state.canvasHeight / state.fieldRes) + 1;
    
    for (let fieldY = 0; fieldY < fieldHeight - 1; fieldY++) {
      for (let fieldX = 0; fieldX < fieldWidth - 1; fieldX++) {
        const cornersValue = MathUtil.calcLocalCornersDecimalValue(state.field, fieldX, fieldY);
        if (MathUtil.in(cornersValue, [0, 15]) != -1) {
          continue;
        }

        const origin = {x: fieldX * state.fieldRes, y: fieldY * state.fieldRes};
        this.drawStrokeIsoline(ctx, origin, cornersValue, state.fieldRes);
      }
    }
  }

  /**
   * Draws a single isoline based on previously computed corners' value.
   * 
   * @param {CanvasRenderingContext2D} ctx The rendering context of the target canvas.
   * @param {Point2D} origin The canvas' origin point.
   * @param {number} cornersValue The value of the field's corners.
   * @param {number} fieldRes The resolution of the field.
   */
  private static drawStrokeIsoline(ctx: CanvasRenderingContext2D, origin: Point2D,
      cornersValue: number, fieldRes: number): void {
    switch (cornersValue) {
      case MathUtil.in(cornersValue, [1, 14]):
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.LEFT, Midpoint.BOTTOM]));
        return;
      case MathUtil.in(cornersValue, [2, 13]):
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.BOTTOM, Midpoint.RIGTH]));
        return;
      case MathUtil.in(cornersValue, [3, 12]):
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.LEFT, Midpoint.RIGTH]));
        return;
      case MathUtil.in(cornersValue, [4, 11]):
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.TOP, Midpoint.RIGTH]));
        return;
      case 5:
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.LEFT, Midpoint.TOP]));
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.BOTTOM, Midpoint.RIGTH]));
        return;
      case MathUtil.in(cornersValue, [6, 9]):
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.TOP, Midpoint.BOTTOM]));
        return;
      case MathUtil.in(cornersValue, [7, 8]):
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.LEFT, Midpoint.TOP]));
        return;
      case 10:
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.LEFT, Midpoint.BOTTOM]));
        this.drawLineSegment(ctx, MathUtil.buildLineSegment(origin, fieldRes, [Midpoint.TOP, Midpoint.RIGTH]));
    }
  }
}
