import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "./../redux/actions";
import { SortIcon } from "components/SortIcon";

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
  const key = useSelector(({ sort }) => sort.key);

  const headClickHandler = ({ target }) => {
    dispatch(setSort(target.dataset.name));
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
          <SortIcon isKey={key === "id"} />
          id
        </th>
        <th
          className="text-center bg-light p-2 col-5 border"
          style={style.th}
          data-name="firstName"
          onClick={headClickHandler}
        >
          <SortIcon isKey={key === "firstName"} />
          Имя
        </th>
        <th
          className="text-center bg-light p-2 col-5 border"
          style={style.th}
          data-name="lastName"
          onClick={headClickHandler}
        >
          <SortIcon isKey={key === "lastName"} />
          Фамилия
        </th>
      </tr>
    </thead>
  );
});
