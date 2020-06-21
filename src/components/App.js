import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import Header from './Header/HeaderContainer';
import PagesRouter from '../routes/PagesRouter';
import Loader from './Loader/Loader';

const App = ({ refreshCurrentUser, isLoading }) => {
  useEffect(() => {
    refreshCurrentUser();
  }, [refreshCurrentUser]);

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <PagesRouter />
    </>
  );
};

App.propTypes = {
  isLoading: propTypes.bool.isRequired,
  refreshCurrentUser: propTypes.func.isRequired,
};

export default App;
