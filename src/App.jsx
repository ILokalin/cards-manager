import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCards } from "./redux";
import { Header } from "components/Header";
import { CardSection } from "components/CardSection";
import { TableSection } from "components/TableSection";
import { Alert } from "components/Alert";

export function App() {
  const dispatch = useDispatch();
  const cards =
    useSelector((store) => {
      return store.cards;
    }) || [];

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
        <CardSection card={cards.find((card) => card.isActive)} />
        <TableSection cards={cards} />
      </div>
    </div>
  );
}
