import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../components/ContactForm/ContactFormContainer';
import ContactList from '../components/ContactList/ContactListContainer';
import Filter from '../components/Filter/FilterContainer';
import slideTransition from '../transitions/slide.module.css';
import { getAllContacts } from '../redux/phonebook/selectors';
import { downloadContacts } from '../redux/phonebook/operations';
import ProtectedRoute from '../HOCs/ProtectedRoute';

const ContactsPage = ({ contacts, getUserContacts }) => {
  useEffect(() => {
    getUserContacts();
  }, [getUserContacts]);
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }),
  ).isRequired,
  getUserContacts: propTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: getAllContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserContacts: () => dispatch(downloadContacts()),
  };
};

export default ProtectedRoute(connect(mapStateToProps, mapDispatchToProps)(ContactsPage));
