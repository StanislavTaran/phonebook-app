import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LogInPage';

const AccountPageAsync = lazy(() =>
  import('../pages/AccountPage' /* webpackChunkName: "account-page" */),
);

const ContactsPageAsync = lazy(() =>
  import('../pages/ContactsPage' /* webpackChunkName: "contact-page" */),
);

const PagesRouter = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/account" component={AccountPageAsync} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/contacts" component={ContactsPageAsync} />
    </Switch>
  </Suspense>
);

export default PagesRouter;
