export const PREVIUS = "ArrowLeft";
export const NEXT = "ArrowRight";

export const DirectionHandler = {
  [PREVIUS]: (prevIndex, length) => {
    return prevIndex === 0 ? length - 1 : prevIndex - 1;
  },
  [NEXT]: (prevIndex, length) => {
    return prevIndex === length - 1 ? 0 : prevIndex + 1;
  },
  DEFAULT: (state) => state,
};
