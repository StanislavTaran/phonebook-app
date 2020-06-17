import React, { Component } from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Header from './Header/HeaderContainer';
import TabletShape from './TabletShape/TabletShape';
// import ContactsPage from '../pages/ContactsPage';
import PopUpNotification from './PopUpNotification/PopUpNotification';
import slideReverseTransition from '../transitions/slide-reverse.module.css';
import PagesRouter from '../routes/PagesRouter';

class App extends Component {
  componentDidMount() {
    const { refreshCurrentUser } = this.props;
    refreshCurrentUser();
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
        <PagesRouter />
      </TabletShape>
    );
  }
}

App.propTypes = {
  isAlreadyinContacts: propTypes.bool.isRequired,
  refreshCurrentUser: propTypes.func.isRequired,
};

export default App;
