import React from 'react';
import propTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import styles from './PopUpNotification.module.css';

const popUpNotification = ({ type, title }) => (
  <div className={styles.container}>
    <Alert variant="filled" color={type} severity={type}>
      {title}
    </Alert>
  </div>
);

popUpNotification.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default popUpNotification;
