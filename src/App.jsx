import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCards, showAlert } from "redux/actions";
import { Header } from "components/Header";
import { NavPage } from "components/NavPage";
import { ListPage } from "components/ListPage";
import { Alert } from "components/Alert";

export function App() {
  const dispatch = useDispatch();
  const cardsList = useSelector((store) => {
    return store.cards;
  });

  const [isAlert, alertMessage] = useSelector(({ isAlert, alertMessage }) => [
    isAlert,
    alertMessage,
  ]);

  useEffect(() => {
    dispatch(getCards());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="container">
        {isAlert ? <Alert message={alertMessage} /> : null}
        <NavPage data={cardsList} />
        <ListPage data={cardsList} />
      </div>
    </div>
  );
}
