import types from "./contacts-types";
import { v4 as uuidv4 } from "uuid";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

const contactsFilter = (value) => ({
  type: types.FILTER,
  payload: value,
});

export default { addContact, deleteContact, contactsFilter };
