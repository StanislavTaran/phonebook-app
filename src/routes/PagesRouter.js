import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import ContactsPage from '../pages/ContactsPage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LogInPage';

const PagesRouter = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={LoginPage} />
    <Route path="/signup" component={SignUpPage} />
    <Route path="/contacts" component={ContactsPage} />
  </>
);

export default PagesRouter;
