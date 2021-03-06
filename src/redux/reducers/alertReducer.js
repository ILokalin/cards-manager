import { SHOW_ALERT, REMOVE_ALERT } from "redux/types";

const Handler = {
  [SHOW_ALERT]: (state, payload) => ({
    ...state,
    isAlert: true,
    alertMessage: payload,
  }),
  [REMOVE_ALERT]: (state) => ({ ...state, isAlert: false }),
  DEFAULT: (state) => state,
};

const initialize = {
  isAlert: false,
  alertMessage: "",
};

export const alertReducer = (state = initialize, { type, payload }) => {
  const handle = Handler[type] ?? Handler.DEFAULT;
  return handle(state, payload);
};
