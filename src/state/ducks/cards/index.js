import { Record } from "immutable";
import { useSelector } from "react-redux";
import { sortAZ } from "utils/sort";
import { http, dataAdapter } from "utils/http";
import { URN_STRING } from "config";
import { showAlert } from "state/ducks/events";
import {
  getCardsState,
  navBackwardState,
  navForwardState,
  selectCardState,
  setSortState,
  startLoadingState,
} from "./cardsUtils";

export const moduleName = "cards";
const prefix = `${moduleName}`;

export const SELECT_CARD = `${prefix}/SELECT_CARD`;
export const NAV_FORWARD = `${prefix}/NAV_FORWARD`;
export const NAV_BACKWARD = `${prefix}/NAV_BACKWARD`;
export const START_LOADING = `${prefix}/START_LOADING`;
export const GET_CARDS = `${prefix}/GET_CARDS`;
export const SET_SORT = `${prefix}/SET_SORT`;

const ReducerRecord = Record({
  cards: [],
  isLoading: false,
  sort: {
    key: "id",
    direction: sortAZ,
    isAZDirection: true,
  },
});

const Handler = {
  [START_LOADING]: startLoadingState,
  [GET_CARDS]: getCardsState,
  [NAV_BACKWARD]: navBackwardState,
  [NAV_FORWARD]: navForwardState,
  [SELECT_CARD]: selectCardState,
  [SET_SORT]: setSortState,
  DEFAULT: (state) => state,
};

export default function reducer(
  state = new ReducerRecord(),
  { type, payload }
) {
  const handle = Handler[type] ?? Handler.DEFAULT;
  return handle(state, payload);
}

/**
 * Selectors
 */

const cardsSelector = (state) => state[moduleName].cards;
const sortDirectionSelector = (state) => state[moduleName].sort.isAZDirection;
const sortKeySelector = (state) => state[moduleName].sort.key;

/**
 * Hooks
 */

export const useCards = () => {
  return useSelector(cardsSelector);
};

export const useSortDirection = () => {
  return useSelector(sortDirectionSelector);
};

export const useSortKey = () => {
  return useSelector(sortKeySelector);
};

/**
 * Helpers
 */

const isActionSuccess = ({ isError, message }, dispatch) => {
  if (isError) {
    dispatch(showAlert(message));
    return false;
  }
  return true;
};

/**
 * Actions
 */

export const getCards = () => async (dispatch) => {
  const response = await http(URN_STRING);

  if (isActionSuccess(response, dispatch)) {
    dispatch({
      type: GET_CARDS,
      payload: dataAdapter(response.data),
    });
  }
};

export const selectCard = (id) => {
  return {
    type: SELECT_CARD,
    payload: id,
  };
};

export const forward = () => {
  return {
    type: NAV_FORWARD,
  };
};

export const backward = () => {
  return {
    type: NAV_BACKWARD,
  };
};

export const setSort = (key) => {
  return {
    type: SET_SORT,
    payload: key,
  };
};
