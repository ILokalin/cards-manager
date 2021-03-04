import { setActive } from "./../redux";
import { useDispatch } from "react-redux";

export const TableRow = ({ id, firstName, lastName, isActive }) => {
  const dispatch = useDispatch();
  const rowClass = isActive ? "bg-primary text-light" : "border";
  const style = {
    row: {
      cursor: "pointer",
    },
  };

  const rowSelectHandler = () => {
    dispatch(setActive(id));
  };

  return (
    <tr className={rowClass} style={style.row} onClick={rowSelectHandler}>
      <td className="p-2 border">{id}</td>
      <td className="p-2 border">{firstName}</td>
      <td className="p-2 border">{lastName}</td>
    </tr>
  );
};
