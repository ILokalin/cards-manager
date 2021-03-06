import { forwardRef } from "react";
import { useDispatch } from "react-redux";
import { SortDirectionIcon } from "components/cards/sortDirectionIcon";
import { setSort, useSortKey } from "state/ducks/cards";

const style = {
  th: {
    position: "sticky",
    top: 0,
    cursor: "pointer",
    zIndex: 2,
    transform: "translateY(-1px)",
  },
};

export const TableHead = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const key = useSortKey(({ data }) => data.sort.key);

  const headClickHandler = ({ target }) => {
    dispatch(setSort(target.closest("th").dataset.name));
  };

  return (
    <thead ref={ref}>
      <tr>
        <th
          className="text-center bg-light p-2 col-2 border"
          style={style.th}
          data-name="id"
          onClick={headClickHandler}
        >
          <SortDirectionIcon isKey={key === "id"} />
          id
        </th>
        <th
          className="text-center bg-light p-2 col-5 border"
          style={style.th}
          data-name="firstName"
          onClick={headClickHandler}
        >
          <SortDirectionIcon isKey={key === "firstName"} />
          Имя
        </th>
        <th
          className="text-center bg-light p-2 col-5 border"
          style={style.th}
          data-name="lastName"
          onClick={headClickHandler}
        >
          <SortDirectionIcon isKey={key === "lastName"} />
          Фамилия
        </th>
      </tr>
    </thead>
  );
});
