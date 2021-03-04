import { forward, backward } from "../redux";

export const PREVIUS = "ArrowLeft";
export const NEXT = "ArrowRight";
export const UP = "ArrowUp";
export const DOWN = "ArrowDown";

export const KeyMapHandler = {
  [PREVIUS]: backward,
  [UP]: backward,
  [NEXT]: forward,
  [DOWN]: forward,
  DEFAULT: null,
};
