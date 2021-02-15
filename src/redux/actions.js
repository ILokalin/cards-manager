import { getData } from "utils/mockData";

export const SET_ACTIVE = "NAV/SET_ACTIVE";
export const GET_CARDS = "CONNECT/GET_CARDS";

export const setActive = (id) => {
  return {
    type: SET_ACTIVE,
    payload: id,
  };
};

export const getCards = () => {
  return (dispatch) => {
    const data = getData();

    dispatch({
      type: GET_CARDS,
      payload: data,
    });
  };
};
