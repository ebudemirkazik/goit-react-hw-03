import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={styles.card}>
      <p>👤 {name}</p>
      <p>📞 {number}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;
