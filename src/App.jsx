import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "redux/actions";
import { Header } from "components/Header";
import { NavPage } from "components/NavPage";
import { ListPage } from "components/ListPage";

export function App() {
  const dispatch = useDispatch();
  const cardsList = useSelector((store) => {
    return store.cards;
  });

  useEffect(() => {
    dispatch(getCards());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="container">
        <NavPage data={cardsList} />
        <ListPage data={cardsList} />
      </div>
    </div>
  );
}
