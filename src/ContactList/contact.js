import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";

const Contacts = ({ contact, deleteContacts }) => {
  return (
    <div className={styles["contact-info"]}>
      <p className={styles["contact-info__paragraph"]}>
        {contact.name}: <span>{contact.number}</span>
      </p>
      <button
        type="button"
        onClick={deleteContacts}
        className={styles["contact-info__button"]}
      >
        Delete
      </button>
    </div>
  );
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default Contacts;
