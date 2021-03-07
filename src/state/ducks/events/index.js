import { Record } from "immutable";
import { useSelector } from "react-redux";

export const moduleName = "events";
const prefix = `${moduleName}`;

export const SHOW_ALERT = `${prefix}/SHOW_ALERT`;
export const REMOVE_ALERT = `${prefix}/REMOVE_ALERT`;

const ReducerRecord = Record({
  isAlert: false,
  alertMessage: "",
});

const Handler = {
  [SHOW_ALERT]: (state, payload) =>
    state.set("isAlert", true).set("alertMessage", payload),
  [REMOVE_ALERT]: (state) => state.set("isAlert", false),
  DEFAULT: (state) => state,
};

export default function alertReducer(
  state = new ReducerRecord(),
  { type, payload }
) {
  const handle = Handler[type] ?? Handler.DEFAULT;
  return handle(state, payload);
}

/**
 * Selectors
 */

const alertSelector = (state) => {
  return [state[moduleName].isAlert, state[moduleName].alertMessage];
};

/**
 * Hooks
 */

export const useAlert = () => {
  return useSelector(alertSelector);
};

/**
 * Actions
 */

let lastTimeout = null;

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
