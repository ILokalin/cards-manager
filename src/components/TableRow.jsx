import { forwardRef } from "react";
import { setActive } from "redux/actions";
import { useDispatch } from "react-redux";

const style = {
  row: {
    cursor: "pointer",
  },
  rowClass: "bg-primary text-light",
};

export const TableRow = forwardRef(
  ({ id, firstName, lastName, isActive }, ref) => {
    const dispatch = useDispatch();
    const rowSelectHandler = () => {
      dispatch(setActive(id));
    };

    return (
      <tr
        className={`${isActive ? style.rowClass : ""}`}
        style={style.row}
        onClick={rowSelectHandler}
        ref={ref}
      >
        <td className="p-2 border">{id}</td>
        <td className="p-2 border">{firstName}</td>
        <td className="p-2 border">{lastName}</td>
      </tr>
    );
  }
);
