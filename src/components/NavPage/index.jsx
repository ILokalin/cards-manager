import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setActive } from "redux/actions";
import { PREVIUS, NEXT, DirectionHandler } from "./nav-tools";
import { getCardType, CardFactory, emptyCardTemplate } from "utils/card";

const INDEX_CARD_DEFAULT = null;

export const NavPage = ({ data }) => {
  const dispatch = useDispatch();
  const [cardShowIndex, setCardShowIndex] = useState(INDEX_CARD_DEFAULT);
  const card = useRef(emptyCardTemplate);

  useEffect(() => {
    if (cardShowIndex === null && data.length > 0) {
      setCardShowIndex(0);
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {
    card.current = data[cardShowIndex] ?? emptyCardTemplate;
    dispatch(setActive(card.current.id));
    // eslint-disable-next-line
  }, [cardShowIndex]);

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
    // eslint-disable-next-line
  }, []);

  const showCard = (action) => {
    setCardShowIndex((prevIndex) => action(prevIndex, data.length));
  };

  const keydownHandler = ({ key }) => {
    const action = DirectionHandler[key] ?? DirectionHandler.DEFAULT;
    showCard(action);
  };

  const previusButtonHandler = () => {
    showCard(DirectionHandler[PREVIUS]);
  };

  const nextButtonHandler = () => {
    showCard(DirectionHandler[NEXT]);
  };

  return (
    <div className="NavPage pt-5">
      <h2 className="text-center">
        Карточка&nbsp;{getCardType(card.current).genitive}
      </h2>
      {CardFactory[card.current.type](card.current)}
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-secondary mt-4"
          onClick={previusButtonHandler}
        >
          Предыдущий
        </button>
        <button className="btn btn-secondary mt-4" onClick={nextButtonHandler}>
          Следующий
        </button>
      </div>
    </div>
  );
};
