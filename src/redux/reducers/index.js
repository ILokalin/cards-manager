import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { alertReducer } from "./alertReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  alert: alertReducer,
});
