import React from "react";
import Contact from "../contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => onDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
