import React, { Component } from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Header from './Header/Header';
import TabletShape from './TabletShape/TabletShape';
// import ContactsPage from '../pages/ContactsPage';
import PopUpNotification from './PopUpNotification/PopUpNotification';
import slideReverseTransition from '../transitions/slide-reverse.module.css';
import LoginPage from '../pages/LogInPage';
import SignUpPage from '../pages/SignUpPage';

class App extends Component {
  componentDidMount() {
    const persistedContacts = localStorage.getItem('contacts');
    const { loadContactsFromLS } = this.props;

    if (persistedContacts) {
      loadContactsFromLS(JSON.parse(persistedContacts));
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.props;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { isAlreadyinContacts } = this.props;

    return (
      <TabletShape>
        <Header />
        <CSSTransition
          in={isAlreadyinContacts}
          timeout={250}
          classNames={slideReverseTransition}
          unmountOnExit
        >
          <PopUpNotification title="Contact already exist!" />
        </CSSTransition>
        <SignUpPage />
        <LoginPage />
        {/* <ContactsPage /> */}
      </TabletShape>
    );
  }
}

App.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }),
  ).isRequired,
  isAlreadyinContacts: propTypes.bool.isRequired,
  loadContactsFromLS: propTypes.func.isRequired,
};

export default App;
