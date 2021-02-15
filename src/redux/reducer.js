import { SET_ACTIVE, GET_CARDS } from "./actions";

const Handler = {
  [SET_ACTIVE]: (state, payload) => {
    return {
      ...state,
      cards: state.cards.map((card) => {
        return { ...card, isActive: card.id === payload ? true : false };
      }),
    };
  },
  [GET_CARDS]: (state, payload) => ({ ...state, cards: [...payload] }),
  DEFAULT: (state) => state,
};

const initialize = {
  cards: [],
};

export const reducer = (state = initialize, { type, payload }) => {
  const handle = Handler[type] ?? Handler.DEFAULT;
  return handle(state, payload);
};
