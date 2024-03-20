import AppState from "../interfaces/AppState";
import ArrayUtil from "../util/ArrayUtil";

const canvasWidth = 800;
const canvasHeight = 600;
const defaultFieldRes = 40;

export const initialAppState: AppState = {
  canvasWidth: canvasWidth,
  canvasHeight: canvasHeight,

  // Field array is initialized with the canvas dimensions
  // to handle the user's field resolution changes.
  field: ArrayUtil.generateRandomNumber2DArray(canvasWidth + 1, canvasHeight + 1),
  defaultFieldRes: defaultFieldRes,
  fieldRes: defaultFieldRes,
  minFieldRes: 1,
  maxFieldRes: 999,
  
  isShowField: true,
  isShowIsolines: true,
  isRoundingField: false
};
