import { getCardType, CardFactory, emptyCardTemplate } from "utils/card";
import { CardNavBar } from "components/CardNavBar";

export const CardSection = ({ card = emptyCardTemplate }) => {
  return (
    <div className="pt-5">
      <h2 className="mb-3">Карточка&nbsp;{getCardType(card).genitive}</h2>
      {CardFactory[card.type](card)}
      <CardNavBar />
    </div>
  );
};
