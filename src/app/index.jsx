import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCards, useCards } from "state/ducks/cards";
import { useAlert } from "state/ducks/events";
import { Header } from "components/Header";
import { CardSection } from "components/CardSection";
import { TableSection } from "components/TableSection";
import { Alert } from "components/Alert";
import { setVisibility } from "utils/setVisibility";

export function App() {
  const dispatch = useDispatch();
  const cards = useCards();

  const [isAlert, alertMessage] = useAlert(({ alert }) => [
    alert.isAlert,
    alert.alertMessage,
  ]);

  useEffect(() => {
    dispatch(getCards());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="container">
        {setVisibility(isAlert, <Alert message={alertMessage} />)}
        <CardSection card={cards.find((card) => card.isActive)} />
        <TableSection cards={cards} />
      </div>
    </div>
  );
}
