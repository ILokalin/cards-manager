import { http, dataAdapter } from "utils/http";

const URN_STRING = "members?_expand=college";
export const SET_ACTIVE = "NAV/SET_ACTIVE";
export const GET_CARDS = "CONNECT/GET_CARDS";
export const SHOW_ALERT = "ALERT/SHOW";
export const REMOVE_ALERT = "ALERT/REMOVE_ALERT";
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
