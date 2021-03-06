import {
  SET_ACTIVE,
  GET_CARDS,
  SET_SORT,
  SHOW_ALERT,
  REMOVE_ALERT,
  NAV_FORWARD,
  NAV_BACKWARD,
} from "./types";
import { sortAZ, sortZA } from "utils/sort";

const Handler = {
  [SET_ACTIVE]: (state, payload) => {
    return {
      ...state,
      cards: state.cards.map((card) => {
        return { ...card, isActive: card.id === payload ? true : false };
      }),
    };
  },
  [NAV_FORWARD]: (state) => {
    const { length } = state.cards;
    const currentIndex = state.cards.findIndex((card) => card.isActive);
    const newIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
    return {
      ...state,
      cards: state.cards.map((card, indx) => {
        return { ...card, isActive: indx === newIndex ? true : false };
      }),
    };
  },
  [NAV_BACKWARD]: (state) => {
    const { length } = state.cards;
    const currentIndex = state.cards.findIndex((card) => card.isActive);
    const newIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;

    return {
      ...state,
      cards: state.cards.map((card, indx) => {
        return { ...card, isActive: indx === newIndex ? true : false };
      }),
    };
  },
  [GET_CARDS]: (state, payload) => {
    payload.sort(state.sort.direction(state.sort.key));
    payload[0].isActive = true;

    return {
      ...state,
      isDataLoaded: true,
      cards: [...payload],
    };
  },
  [SET_SORT]: (state, payload) => {
    let { direction, isAZDirection } = state.sort;

    if (state.sort.key === payload) {
      direction = [sortZA, sortAZ][Number(!isAZDirection)];
      isAZDirection = !isAZDirection;
    } else {
      direction = sortAZ;
      isAZDirection = true;
    }

    return {
      ...state,
      cards: [...state.cards.sort(direction(payload))],
      sort: { key: payload, direction, isAZDirection },
    };
  },
  [SHOW_ALERT]: (state, payload) => ({
    ...state,
    isAlert: true,
    alertMessage: payload,
  }),
  [REMOVE_ALERT]: (state) => ({ ...state, isAlert: false }),
  DEFAULT: (state) => state,
};

const initialize = {
  data: [],
  cards: [],
  isDataLoaded: false,
  isAlert: false,
  alertMessage: "",
  sort: {
    key: "id",
    direction: sortAZ,
    isAZDirection: true,
  },
};

export const reducer = (state = initialize, { type, payload }) => {
  const handle = Handler[type] ?? Handler.DEFAULT;
  return handle(state, payload);
};
