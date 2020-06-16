import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import fadeTransition from '../../transitions/fade.module.css';
import styles from './Header.module.css';

const Header = ({ email, onLogout, isAuthenticated }) => {
  const [state, setstate] = useState({
    isPageLoaded: false,
  });

  useEffect(() => {
    setstate({ isPageLoaded: true });
  }, []);

  return (
    <header className={styles.header}>
      <div>
        <CSSTransition in={state.isPageLoaded} timeout={500} classNames={fadeTransition}>
          <h3 className={styles.title}>Phonebook</h3>
        </CSSTransition>
      </div>
      <nav>
        <NavLink className={styles.link} activeClassName={styles.activeLink} to="/" exact>
          HOME
        </NavLink>
        {!isAuthenticated && (
          <NavLink className={styles.link} activeClassName={styles.activeLink} to="/login">
            LOG IN
          </NavLink>
        )}
        {!isAuthenticated && (
          <NavLink className={styles.link} activeClassName={styles.activeLink} to="/signup">
            SIGN UP
          </NavLink>
        )}
        {isAuthenticated && (
          <NavLink className={styles.link} activeClassName={styles.activeLink} to="/contacts">
            CONTACTS
          </NavLink>
        )}
      </nav>
      {isAuthenticated && (
        <div>
          <h2>{email}</h2>
          <button type="button" onClick={onLogout}>
            LOG OUT
          </button>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  onLogout: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
};

export default Header;
