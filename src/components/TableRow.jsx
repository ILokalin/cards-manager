import { useRef, useEffect, useLayoutEffect } from "react";
import { setActive } from "./../redux";
import { useDispatch } from "react-redux";

const style = {
  row: {
    cursor: "pointer",
  },
  rowClass: "bg-primary text-light",
};

export const TableRow = ({
  id,
  firstName,
  lastName,
  isActive,
  ...otherProps
}) => {
  const dispatch = useDispatch();
  const row = useRef(null);

  const rowSelectHandler = () => {
    dispatch(setActive(id));
  };

  useEffect(() => {
    if (isActive) {
      const { container, thead } = otherProps;
      const containerTop = container.current.getBoundingClientRect().top;
      const containerHeight = container.current.getBoundingClientRect().height;
      const { top, bottom } = row.current.getBoundingClientRect();
      const topOffset = thead.current.getBoundingClientRect().height;

      if (top < containerTop + topOffset) {
        container.current.scrollBy({
          top: top - containerTop - topOffset,
          behavior: "smooth",
        });
      } else if (bottom > containerTop + containerHeight) {
        container.current.scrollBy({
          top: bottom - containerTop - containerHeight,
          behavior: "smooth",
        });
      }
    }
    // eslint-disable-next-line
  }, [isActive]);

  return (
    <tr
      className={`${isActive ? style.rowClass : ""}`}
      style={style.row}
      onClick={rowSelectHandler}
      ref={row}
    >
      <td className="p-2 border">{id}</td>
      <td className="p-2 border">{firstName}</td>
      <td className="p-2 border">{lastName}</td>
    </tr>
  );
};
