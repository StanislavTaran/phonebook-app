import React from 'react';
import propTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contactItem, onDeleteContact }) => {
  const { name, number, id } = contactItem;

  return (
    <div className={styles.container}>
      <div className={styles.numberInfo}>
        <div className={styles.name}>{name}</div>
        <div className={styles.number}>{number}</div>
      </div>
      <button className={styles.buttonDelete} onClick={() => onDeleteContact(id)} type="button">
        {null}
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contactItem: propTypes.shape({
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactItem;
