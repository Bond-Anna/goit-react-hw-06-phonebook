import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contacts-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const contactsStore = createStore(rootReducer, composeWithDevTools());

export default contactsStore;
