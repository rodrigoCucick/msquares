export default class ArrayUtil {
  /**
   * Creates a new 2D array filled with random float values
   * between 0 (inclusive) and 1 (exclusive).
   * 
   * The array itself is built inverted, that is, rows become columns
   * and columns become rows, this way the array can be easily indexed
   * anywhere by X and Y values (cartesian coordinate system).
   * 
   * @param {number} width The width of the array.
   * @param {number} height The height of the array.
   * @returns A reference to a new 2D array filled with random float values
   *          between 0 (inclusive) and 1 (exclusive).
   */
  public static generateRandomNumber2DArray(width: number, height: number): number[][] {
    const array: number[][] = [];
    for (let x = 0; x < width; x++) {
      const row: number[] = [];
      for (let y = 0; y < height; y++) {
        row.push(Math.random());
      }
      array.push(row);
    }
    return array;
  }
}
