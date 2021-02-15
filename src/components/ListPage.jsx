import { TableRow } from "components/TableRow";

export const ListPage = ({ data }) => {
  return (
    <table className="col-12 mt-5 border-top table table-hover">
      <caption valign="top">Список регистрационных карточек</caption>
      <thead>
        <tr>
          <th className="text-center col-2 border">id</th>
          <th className="text-center border">Имя</th>
          <th className="text-center border">Фамилия</th>
        </tr>
      </thead>
      <tbody>
        {data.map((card) => (
          <TableRow {...card} key={card.id} />
        ))}
      </tbody>
    </table>
  );
};
