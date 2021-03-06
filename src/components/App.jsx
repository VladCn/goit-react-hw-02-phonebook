import React from "react";
import shortid from "shortid";
import { ContactList } from "./ContactList";
import { Phonebook } from "./Phonebook";
import { ContactRender } from "./ContactRender";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleDelete = (event) => {
    console.log(event.target.value);
    this.setState((prev) => ({
      contacts: prev.contacts.filter(
        (value) => value.id !== event.target.value
      ),
    }));
  };

  handleFilterContact = (event) => {
    event.preventDefault();
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  handleSubmit = (data) => {
    this.setState((prev) => {
      const res = prev.contacts.map((item) => {
        return item.name;
      });

      if (res.includes(data.name)) {
        return alert(`${data.name} is already in contacts`);
      } else {
        return {
          contacts: [
            ...prev.contacts,
            {
              name: data.name,
              number: data.number,
              id: shortid.generate(),
            },
          ],
        };
      }
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((item) => {
      return item?.name?.includes(this.state.filter);
    });
    console.log(filteredContacts);
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
          marginLeft: "50px",
          // fontSize: 40,
          // textTransform: "uppercase",
          color: "#010101",
        }}
      >
        <h2>Phonebook</h2>
        <Phonebook onSubmit={this.handleSubmit} />

        <ContactList
          contacts={filteredContacts}
          onFilterContact={this.handleFilterContact}
          filter={this.state.filter}
        />

        <ContactRender
          contacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
