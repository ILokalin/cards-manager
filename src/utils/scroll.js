export const scroll = ({ container, thead, activeRow }) => {
  const scrollBy = (offset) => {
    container.current.scrollBy({
      top: offset,
      behavior: "smooth",
    });
  };

  const {
    top: containerTop,
    height: containerHeight,
  } = container.current.getBoundingClientRect();

  const { top, bottom } = activeRow.current.getBoundingClientRect();
  const topOffset = thead.current.getBoundingClientRect().height;

  if (top < containerTop + topOffset) {
    scrollBy(top - containerTop - topOffset);
  } else if (bottom > containerTop + containerHeight) {
    scrollBy(bottom - containerTop - containerHeight);
  }
};
