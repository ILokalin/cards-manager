import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "./../redux/actions";
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
  const dispatch = useDispatch();
  const container = useRef(null);
  const thead = useRef(null);

  const headClickHandler = ({ target }) => {
    dispatch(setSort(target.dataset.name));
  };

  return (
    <div className="mt-4 mb-4">
      <h2 className="mb-3">Список регистрационных карточек</h2>
      <div
        className="border-top border-bottom"
        style={style.listContainer}
        ref={container}
      >
        <table className="col-12 m-0 table table-hover">
          <thead ref={thead}>
            <tr>
              <th
                className="text-center bg-light p-2 col-2 border"
                style={style.th}
                data-name="id"
                onClick={headClickHandler}
              >
                id
              </th>
              <th
                className="text-center bg-light p-2 col-5 border"
                style={style.th}
                data-name="firstName"
                onClick={headClickHandler}
              >
                Имя
              </th>
              <th
                className="text-center bg-light p-2 col-5 border"
                style={style.th}
                data-name="lastName"
                onClick={headClickHandler}
              >
                Фамилия
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((card) => (
              <TableRow
                {...card}
                key={card.id}
                container={container}
                thead={thead}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
