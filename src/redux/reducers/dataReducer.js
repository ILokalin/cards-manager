import {
  GET_CARDS,
  NAV_BACKWARD,
  NAV_FORWARD,
  SET_ACTIVE,
  SET_SORT,
} from "redux/types";
import {
  getCards,
  navBackward,
  navForward,
  setActive,
  setSort,
} from "./dataReducersFunctions.js";
import { sortAZ } from "utils/sort";

const Handler = {
  [GET_CARDS]: getCards,
  [NAV_BACKWARD]: navBackward,
  [NAV_FORWARD]: navForward,
  [SET_ACTIVE]: setActive,
  [SET_SORT]: setSort,
  DEFAULT: (state) => state,
};

const initialize = {
  cards: [],
  isDataLoaded: false,
  sort: {
    key: "id",
    direction: sortAZ,
    isAZDirection: true,
  },
};

export const dataReducer = (state = initialize, { type, payload }) => {
  const handle = Handler[type] ?? Handler.DEFAULT;
  return handle(state, payload);
};
