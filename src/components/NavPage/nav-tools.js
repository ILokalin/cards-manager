export const PREVIUS = "ArrowLeft";
export const NEXT = "ArrowRight";
export const UP = "ArrowUp";
export const DOWN = "ArrowDown";

const previusDirection = (prevIndex, length) => {
  return prevIndex === 0 ? length - 1 : prevIndex - 1;
};

const nextDirection = (prevIndex, length) => {
  return prevIndex === length - 1 ? 0 : prevIndex + 1;
};

export const DirectionHandler = {
  [PREVIUS]: previusDirection,
  [UP]: previusDirection,
  [NEXT]: nextDirection,
  [DOWN]: nextDirection,
  DEFAULT: (state) => state,
};
