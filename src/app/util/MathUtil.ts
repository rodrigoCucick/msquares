import LineSegment from "../interfaces/LineSegment";
import { Midpoint } from "../enums/Midpoint";
import Point2D from "../interfaces/Point2D";

export default class MathUtil {
  public static TWO_PI = 2 * Math.PI; // 2π rad = 360°.

  /**
   * Checks if a value (number) is in a list of values (array of numbers).
   * 
   * @param {number} val The value to be checked if it's in the list of values.
   * @param {number} inVals The list of values.
   * @returns If the value is in the list of values, returns the value itself.
   *          Returns -1 otherwise.
   */
  public static in(val: number, inVals: number[]): number {
    for (const inVal of inVals) {
      if (val == inVal) {
        return val;
      }
    }
    return -1;
  }

  /**
   * Creates a new line segment based on the canvas' origin, field resolution
   * and two distinct midpoints.
   * 
   * @param {Point2D} canvasOrigin The canvas' origin point.
   * @param {number} fieldRes The resolution of the field.
   * @param {Midpoint[]} midpoints An array with exatcly two midpoints.
   * @returns A new line segment with its corresponding points (p1 and p2).
   */
  public static buildLineSegment(canvasOrigin: Point2D, fieldRes: number, midpoints: Midpoint[]): LineSegment {
    if (midpoints.length != 2) {
      throw new Error("The array of midpoints must have exactly two elements in order to build a line segment.");
    }
    
    const fieldHalfRes = (fieldRes / 2);

    let pointArr: Point2D[] = [];
    for (let midpoint of midpoints) {
      switch (midpoint) {
        case Midpoint.TOP:
          pointArr.push({x: canvasOrigin.x + fieldHalfRes, y: canvasOrigin.y});
          break;
        case Midpoint.BOTTOM:
          pointArr.push({x: canvasOrigin.x + fieldHalfRes, y: canvasOrigin.y + fieldRes});
          break;
        case Midpoint.LEFT:
          pointArr.push({x: canvasOrigin.x, y: canvasOrigin.y + fieldHalfRes});
          break;
        case Midpoint.RIGTH:
          pointArr.push({x: canvasOrigin.x + fieldRes, y: canvasOrigin.y + fieldHalfRes});
          break;
      }
    };

    return {p1: pointArr[0], p2: pointArr[1]};
  }

  /**
   * Navigating (clockwise) the field's local corners, creates a nibble (4-bit value) by bitshifting
   * each rounded corner value (between 0 and 1) to its corresponding place on the nibble,
   * then returns the nibble's decimal value.
   * 
   * The nibble's MSB (most significant bit) is the value of the upper left corner,
   * while its LSB (least significant bit) is the value of the bottom left corner:
   * 
   * @example
   * MSB
   * 0------1
   * |      |
   * |      |
   * 3------2
   * LSB
   * 
   * @param {number} fieldX The field's X position.
   * @param {number} fieldY The field's Y position.
   * @returns An integer between 0 and 15 (both inclusive).
   */
  public static calcLocalCornersDecimalValue(field: number[][], fieldX: number, fieldY: number): number {
    return Math.round(field[fieldX][fieldY]) << 3
        | Math.round(field[fieldX + 1][fieldY]) << 2
        | Math.round(field[fieldX + 1][fieldY + 1]) << 1
        | Math.round(field[fieldX][fieldY + 1]);
  }
}
