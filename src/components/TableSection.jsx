import { useRef, useEffect, createRef } from "react";
import { TableRow } from "components/TableRow";
import { TableHead } from "components/TableHead";
import { scroll } from "utils/scroll";
import { setVisibility } from "utils/setVisibility";

const style = {
  listContainer: {
    maxHeight: "40vh",
    overflowY: "auto",
  },
};

export const TableSection = ({ cards }) => {
  const container = useRef(null);
  const thead = useRef(null);
  const activeRow = createRef();

  useEffect(() => {
    if (activeRow.current !== null) {
      scroll({ container, thead, activeRow });
    }
    // eslint-disable-next-line
  }, [activeRow]);

  return (
    <section className="mt-4 mb-4">
      <h2 className="mb-3">Список регистрационных карточек</h2>
      <div
        className="border-top border-bottom"
        style={style.listContainer}
        ref={container}
      >
        <table className="col-12 m-0 table table-hover">
          <TableHead ref={thead} />
          <tbody>
            {cards.map((card) =>
              setVisibility(
                card.isActive,
                <TableRow {...card} key={card.id} ref={activeRow} />,
                <TableRow {...card} key={card.id} />
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
