import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../components/ContactForm/ContactFormContainer';
import ContactList from '../components/ContactList/ContactListContainer';
import Filter from '../components/Filter/FilterContainer';
import slideTransition from '../transitions/slide.module.css';
import { getAllContacts } from '../redux/selectors';

const ContactsPage = ({ contacts }) => (
  <>
    <ContactForm />
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames={slideTransition}
      unmountOnExit
    >
      <Filter />
    </CSSTransition>
    <CSSTransition
      in={contacts.length > 0}
      timeout={250}
      classNames={slideTransition}
      unmountOnExit
    >
      <ContactList />
    </CSSTransition>
  </>
);

ContactsPage.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: getAllContacts(state),
  };
};

export default connect(mapStateToProps)(ContactsPage);
