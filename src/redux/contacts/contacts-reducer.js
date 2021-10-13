import { combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";
import types from "./contacts-types";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }
const contactList = [
  { name: "Rosie Simpson", id: uuidv4(), number: "459-12-56" },
  { name: "Hermione Kline", id: uuidv4(), number: "443-89-12" },
  { name: "Eden Clements", id: uuidv4(), number: "645-17-79" },
];
const items = (state = contactList, action) => {
  switch (action.type) {
    case types.ADD:
      return [action.payload, ...state];

    case types.DELETE:
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};
const filter = (state = "", action) => {
  switch (action.type) {
    case types.FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
