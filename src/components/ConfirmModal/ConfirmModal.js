import React from 'react';
import propTypes from 'prop-types';
import styles from './ConfirmModal.module.css';

const ConfirmModal = ({ message }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <p className={styles.message}>{message}</p>
    </div>
  </div>
);

ConfirmModal.propTypes = {
  message: propTypes.string.isRequired,
};

export default ConfirmModal;
