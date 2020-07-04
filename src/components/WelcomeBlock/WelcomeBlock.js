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
      <img
        src="https://cdn.pixabay.com/photo/2014/07/10/06/51/phone-388838_1280.png"
        alt="phone"
        className={styles.imagePhone}
      />
      <p className={styles.info}>
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
