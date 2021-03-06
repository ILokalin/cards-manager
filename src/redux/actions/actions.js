import { http, dataAdapter } from "utils/http";
import {
  SET_ACTIVE,
  NAV_FORWARD,
  NAV_BACKWARD,
  GET_CARDS,
  SET_SORT,
  SHOW_ALERT,
  REMOVE_ALERT,
} from "redux/types";

const URN_STRING = "members?_expand=college";

let lastTimeout = null;

const isActionSuccess = ({ isError, message }, dispatch) => {
  if (isError) {
    dispatch(showAlert(message));
    return false;
  }
  return true;
};

export const setActive = (id) => {
  return {
    type: SET_ACTIVE,
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

export const getCards = () => {
  return async (dispatch) => {
    const response = await http(URN_STRING);

    if (isActionSuccess(response, dispatch)) {
      dispatch({
        type: GET_CARDS,
        payload: dataAdapter(response.data),
      });
    }
  };
};

export const setSort = (key) => {
  return {
    type: SET_SORT,
    payload: key,
  };
};

export const showAlert = (message) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: message,
    });

    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }

    lastTimeout = setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  };
};

export const removeAlert = (message) => ({
  type: REMOVE_ALERT,
});
