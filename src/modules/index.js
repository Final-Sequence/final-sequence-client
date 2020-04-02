import { combineReducers } from "redux";
import playerReducer from "./player";
import cardReducer from "./card";
import { intlReducer } from "react-intl-redux";
import localesReducer from "./locales";

const reducers = combineReducers({
  player: playerReducer,
  card: cardReducer,
  locales: localesReducer,
  intl: intlReducer
});

export default reducers;
