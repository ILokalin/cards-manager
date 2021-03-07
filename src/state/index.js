import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./reducer";

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
