import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCards, useCards, useLoading } from "state/ducks/cards";
import { useAlert } from "state/ducks/events";
import { Header } from "components/page/header";
import { CardSection } from "components/cards/cardSection";
import { TableSection } from "components/cards/tableSection";
import { Alert } from "components/events/alert";
import { Loader } from "components/events/loader";
import { setVisibility } from "utils/setVisibility";

export function App() {
  const dispatch = useDispatch();
  const cards = useCards();

  const [isAlert, alertMessage] = useAlert();

  const isLoading = useLoading();

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
        {setVisibility(isLoading, <Loader />)}
      </div>
    </div>
  );
}
