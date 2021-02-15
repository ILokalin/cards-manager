import { SET_ACTIVE, GET_CARDS, SHOW_ALERT, REMOVE_ALERT } from "./actions";

const Handler = {
  [SET_ACTIVE]: (state, payload) => {
    return {
      ...state,
      cards: state.cards.map((card) => {
        return { ...card, isActive: card.id === payload ? true : false };
      }),
    };
  },
  [GET_CARDS]: (state, payload) => ({
    ...state,
    isDataLoaded: true,
    cards: [...payload],
  }),
  [SHOW_ALERT]: (state, payload) => ({
    ...state,
    isAlert: true,
    alertMessage: payload,
  }),
  [REMOVE_ALERT]: (state) => ({ ...state, isAlert: false }),
  DEFAULT: (state) => state,
};

const initialize = {
  cards: [],
  isDataLoaded: false,
  isAlert: false,
  alertMessage: "",
};

export const reducer = (state = initialize, { type, payload }) => {
  const handle = Handler[type] ?? Handler.DEFAULT;
  return handle(state, payload);
};
