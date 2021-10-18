// import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Form from "./components/form/form";
import Filter from "./components/filter/filter";
import ContactList from "./components/contacts/contactList";
// import Counter from './components/Counter/Counter';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(localStorage.getItem('contacts')) ?? [
  //       { name: 'Rosie Simpson', id: uuidv4(), number: '459-12-56' },
  //       { name: 'Hermione Kline', id: uuidv4(), number: '443-89-12' },
  //       { name: 'Eden Clements', id: uuidv4(), number: '645-17-79' },
  //     ]
  //   );
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: uuidv4(),
  //   };
  //   if (
  //     contacts.find(
  //       cont => cont.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     window.alert(`${contact.name} is already in contacts`);
  //     return;
  //   } else setContacts([contact, ...contacts]);
  // };

  // const onFilterChange = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const contactsFilter = () => {
  //   const lowFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(lowFilter)
  //   );
  // };
  // const filtredContacts = contactsFilter();

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };

  return (
    <div className="App">
      {/* <Counter initialValue={10} /> */}
      <h1 className="title">Phonebook</h1>
      <Form />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
