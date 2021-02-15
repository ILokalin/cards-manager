export const TableRow = ({ id, firstName, lastName, isActive }) => {
  const style = isActive ? "bg-primary text-light" : "border";
  return (
    <tr className={style}>
      <td className="p-2 border">{id}</td>
      <td className="p-2 border">{firstName}</td>
      <td className="p-2 border">{lastName}</td>
    </tr>
  );
};
