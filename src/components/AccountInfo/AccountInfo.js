import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import styles from './AccountInfo.module.css';

const AccountInfo = ({ email, name, onDeleteAccount, contacts, getUserContacts }) => {
  useEffect(() => {
    getUserContacts();
  }, [getUserContacts]);

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h3>
          <span className={styles.fieldTitle}>NAME : </span>
          <span>{name}</span>
        </h3>
        <h3>
          <span className={styles.fieldTitle}>EMAIL : </span>
          <span>{email}</span>
        </h3>
        <Button color="secondary" type="button" onClick={onDeleteAccount}>
          Delete Account
        </Button>
      </article>
      <article className={styles.article}>
        <div className={styles.fieldTitle}>CONTACTS</div>
        <div>
          <span>Total number : </span>
          <span>{contacts.length}</span>
        </div>
      </article>
      <article className={styles.article}>info</article>
    </section>
  );
};

AccountInfo.propTypes = {
  email: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onDeleteAccount: propTypes.func.isRequired,
  getUserContacts: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AccountInfo;
