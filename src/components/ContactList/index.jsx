import React from "react";
import PropTypes from "prop-types";

export function ContactList({ contacts, filter, onFilterContact }) {
  console.log(filter);

  return (
    <>
      <h2>Contacts</h2>

      <label>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="name"
          required
          value={filter}
          onChange={onFilterContact}
        />
      </label>

      <ul>
        {contacts.map((item) => (
          <li key={item.id}>
            {item.name}: {item.number}
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};
