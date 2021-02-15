import thunk from "redux-thunk";
import { compose, createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, compose(applyMiddleware(thunk)));
