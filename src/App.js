import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import styles from "./App.module.scss";
import { v4 as uuidv4 } from "uuid";

const getContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const findContact = (contacts, contact) =>
  contacts.find(
    (item) => item.name.toLowerCase() === contact.name.toLowerCase()
  );

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount(){
    const contsctParsed = localStorage.getItem('contacts');

    if(contsctParsed){
      this.setState({
        contacts: JSON.parse(contsctParsed),
      })
    }
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))

    }
  }

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  addContacts = (contact) => {
    const contactFind = findContact(this.state.contacts, contact);
    const contactToAdd = {
      ...contact,
      id: uuidv4(),
    };

    if (contact.name) {
      contactFind
        ? alert(`${contactFind.name} is already in contacts`)
        : this.setState((state) => ({
            contacts: [...state.contacts, contactToAdd],
          }));
    } else {
      alert("Input name please!");
    }
  };

  onDeleteContacts = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = getContacts(contacts, filter);
    return (
      <div>
        <h1 className={styles["title-h1"]}>Phonebook</h1>
        <ContactForm onContactsAdd={this.addContacts} />
        {contacts.length > 0 && (
          <h2 className={styles["title-h2"]}>Contacts</h2>
        )}
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {contacts.length > 0 && (
          <ContactList
            tasks={visibleContacts}
            deleteContacts={this.onDeleteContacts}
          />
        )}
      </div>
    );
  }
}

export default App;
