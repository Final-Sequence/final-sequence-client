import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../modules";
import { addLocaleData } from "react-intl";
import jaLocaleData from "react-intl/locale-data/ja";
import enLocaleData from "react-intl/locale-data/en";
import flatten from "flat";
import ja from "../i18n/language/ja";
import en from "../i18n/language/en";
import { updateIntl } from "react-intl-redux";

addLocaleData(enLocaleData);
addLocaleData(jaLocaleData);

const messages = {
  ja,
  en
};

const initialState = {
  intl: {
    locale: "ja",
    messages: flatten(ja)
  }
};

const persistConfig = {
  key: `frame-c-battle-${process.env.REACT_APP_FRAME_C_BATTLE_ENV}`,
  // blacklist: "intl.messages",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

const changeLanguage = languageCode => {
  store.dispatch(
    updateIntl({
      locale: languageCode,
      messages: flatten(messages[languageCode])
    })
  );
};
export default store;
export { persistor, changeLanguage };
