import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Header from './Header/HeaderContainer';
import PopUpNotification from './PopUpNotification/PopUpNotification';
import slideReverseTransition from '../transitions/slide-reverse.module.css';
import PagesRouter from '../routes/PagesRouter';
import Loader from './Loader/Loader';

const App = ({ refreshCurrentUser, isAlreadyinContacts, isLoading }) => {
  useEffect(() => {
    refreshCurrentUser();
  }, [refreshCurrentUser]);

  return (
    <>
      <Header />
      {isLoading && <Loader />}

      <CSSTransition
        in={isAlreadyinContacts}
        timeout={250}
        classNames={slideReverseTransition}
        unmountOnExit
      >
        <PopUpNotification title="Contact already exist!" />
      </CSSTransition>

      <PagesRouter />
    </>
  );
};

App.propTypes = {
  isAlreadyinContacts: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired,
  refreshCurrentUser: propTypes.func.isRequired,
};

export default App;
