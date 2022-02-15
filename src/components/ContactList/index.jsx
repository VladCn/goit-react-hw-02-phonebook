import React from "react";
import PropTypes from "prop-types";

export function ContactList({ contacts }) {
  return (
    <>
      <h2>Contacts</h2>
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
