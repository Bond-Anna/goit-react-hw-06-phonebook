// import { combineReducers } from 'redux';
import logger from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "./contacts-reducer";

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const contactsStore = createStore(rootReducer, composeWithDevTools());
// console.log(process.env.NODE_ENV);
// console.log(getDefaultMiddleware());

const middleware = [...getDefaultMiddleware(), logger];

const contactsStore = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export default contactsStore;
