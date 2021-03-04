import { TableRow } from "components/TableRow";

const style = {
  listContainer: {
    maxHeight: "40vh",
    overflowY: "auto",
  },
  th: {
    position: "sticky",
    top: 0,
    zIndex: 2,
    transform: "translateY(-1px)",
  },
};

export const ListPage = ({ data }) => {
  return (
    <div className="mt-4">
      <h2 className="mb-3">Список регистрационных карточек</h2>
      <div className="border-top border-bottom" style={style.listContainer}>
        <table className="col-12 m-0 table table-hover">
          <thead>
            <tr>
              <th
                className="text-center bg-light p-2 col-2 border"
                style={style.th}
              >
                id
              </th>
              <th
                className="text-center bg-light p-2 col-5 border"
                style={style.th}
              >
                Имя
              </th>
              <th
                className="text-center bg-light p-2 col-5 border"
                style={style.th}
              >
                Фамилия
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((card) => (
              <TableRow {...card} key={card.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
