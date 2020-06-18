import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
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
    <>
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

          {isAuthenticated && (
            <NavLink className={styles.link} activeClassName={styles.activeLink} to="/account">
              ACCOUNT
            </NavLink>
          )}
        </nav>
        {isAuthenticated && (
          <div className={styles.userBlockContainer}>
            <h3 className={styles.userEmail}>{email}</h3>
            <Button
              type="button"
              onClick={onLogout}
              color="secondary"
              size="small"
              variant="outlined"
            >
              LOG OUT
            </Button>
          </div>
        )}
      </header>
    </>
  );
};

Header.defaultProps = {
  email: 'PROFILE',
};

Header.propTypes = {
  onLogout: propTypes.func.isRequired,
  email: propTypes.string,
  isAuthenticated: propTypes.bool.isRequired,
};

export default Header;
