import React from "react";
import Contacts from "./contact";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";

const ContactList = ({ tasks, deleteContacts }) => {
  return (
    <ul className={styles["contact-list"]}>
      {tasks.map((contact) => (
        <li key={contact.id} className={styles["contact-list__items"]}>
          <Contacts
            contact={contact}
            deleteContacts={() => deleteContacts(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
