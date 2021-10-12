import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./components/form/form";
import { Filter } from "./components/filter/filter";
import { ContactList } from "./components/contacts/contactList";
// import Counter from './components/Counter/Counter';

class App extends Component {
  state = {
    contacts: [
      { name: "Rosie Simpson", id: uuidv4(), number: "459-12-56" },
      { name: "Hermione Kline", id: uuidv4(), number: "443-89-12" },
      { name: "Eden Clements", id: uuidv4(), number: "645-17-79" },
    ],
    filter: "",
  };
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
      // this.setState({ contacts: savedContacts });
    }
  }
  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    console.log(parsedContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    if (
      this.state.contacts.find(
        (cont) => cont.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      window.alert(`${contact.name} is already in contacts`);
      return;
    } else
      this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
  };

  onFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filter = () => {
    const { contacts, filter } = this.state;
    const lowFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const filtredContacts = this.filter();
    return (
      <div className="App">
        {/* <Counter initialValue={10} /> */}
        <h1 className="title">Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className="title">Contacts</h2>
        <Filter value={this.state.filter} onChange={this.onFilterChange} />
        <ContactList
          contacts={filtredContacts}
          onDeleteBtn={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
