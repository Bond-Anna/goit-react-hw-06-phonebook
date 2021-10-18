import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import types from './contacts-types';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     name,
//     number,
//     id: uuidv4(),
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const contactsFilter = value => ({
//   type: types.FILTER,
//   payload: value,
// });

const addContact = createAction("contacts/add", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});
const deleteContact = createAction("contacts/delete");
const contactsFilter = createAction("contacts/filter");

export default { addContact, deleteContact, contactsFilter };
