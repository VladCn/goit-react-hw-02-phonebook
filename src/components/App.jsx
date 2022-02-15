import React from "react";
import shortid from "shortid";
import { ContactList } from "./ContactList";
import { Phonebook } from "./Phonebook";

export class App extends React.Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleChange = (event) => {
    console.log(event.currentTarget.value);
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleChangePhone = (event) => {
    console.log(event.currentTarget.value);
    this.setState({
      number: event.currentTarget.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props);
    console.log(`Signed up as: ${this.state.name}`);
    this.setState((prev) => {
      return {
        contacts: [
          ...prev.contacts,
          {
            name: this.state.name,
            number: this.state.number,
            id: shortid.generate(),
          },
        ],
        name: "",
        number: "",
      };
    });
  };

  render() {
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
        <Phonebook
          state={this.state}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          number={this.state.number}
          handleChange={this.handleChange}
          handleChangePhone={this.handleChangePhone}
        />

        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}