// import { combineReducers } from 'redux';
import logger from "redux-logger";
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts-reducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const contactsStore = createStore(rootReducer, composeWithDevTools());
// console.log(process.env.NODE_ENV);
// console.log(getDefaultMiddleware());

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactsReducer),
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const contactsPersistConfig = {
  key: "contact",
  storage,
  blacklist: ["filter"],
};
const contactsStore = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(contactsStore);

export default { contactsStore, persistor };
