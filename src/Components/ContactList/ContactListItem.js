import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";

const ContactListItem = ({ contact, deleteContacts }) => {
  return (
    <li  className={styles["contact-list__items"]}>
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
    </li>
    
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactListItem;
