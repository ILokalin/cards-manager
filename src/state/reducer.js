import { combineReducers } from "redux";
import cardsReducer, { moduleName as cardsModule } from "./ducks/cards";
import eventsReducer, { moduleName as eventsModule } from "./ducks/events";

export const rootReducer = combineReducers({
  [cardsModule]: cardsReducer,
  [eventsModule]: eventsReducer,
});
