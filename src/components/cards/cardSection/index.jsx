import { getCardType, CardFactory, emptyCardTemplate } from "utils/card";
import { CardNavBar } from "components/cards/cardNavBar";

export const CardSection = ({ card = emptyCardTemplate }) => {
  return (
    <section className="mt-4">
      <h2 className="mb-2 h4">Карточка&nbsp;{getCardType(card).genitive}</h2>
      {CardFactory[card.type](card)}
      <CardNavBar />
    </section>
  );
};
