import React from 'react';
import propTypes from 'prop-types';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import styles from './WelcomeBlock.module.css';

const WelcomeBlock = ({ name }) => (
  <>
    <section className={styles.section}>
      <h2>{`Welcome ${name ? `, ${name}` : ''}!`}</h2>
      <PeopleOutlineIcon color="primary" />
    </section>
    <section>
      <p>
        It&apos;s simple Phonebook application, created by React js, using Redux for organization
        aplication state.
      </p>
    </section>
  </>
);

WelcomeBlock.defaultProps = {
  name: '',
};

WelcomeBlock.propTypes = {
  name: propTypes.string,
};

export default WelcomeBlock;
