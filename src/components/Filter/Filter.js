import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import styles from './Filter.module.css';

const Filter = ({ hanleFilterChange }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Find contacts by name:</h3>
      <TextField
        fullWidth
        variant="outlined"
        margin="normal"
        label="Filter by name"
        color="primary"
        className={styles.input}
        type="text"
        onChange={e => hanleFilterChange(e.currentTarget.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  hanleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
