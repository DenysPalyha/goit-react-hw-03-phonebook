import React from 'react';
import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import styles from './Contact.module.scss';

const ContactList = ({ tasks, deleteContacts }) => {
  return (
    <ul className={styles['contact-list']}>
      {tasks.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          deleteContacts={() => deleteContacts(contact.id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
