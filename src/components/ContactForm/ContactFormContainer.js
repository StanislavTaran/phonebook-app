import { connect } from 'react-redux';
import { toogleExistFlag, addContact } from '../../redux/phonebook/operations';
import { getAllContacts } from '../../redux/phonebook/selectors';
import ContactForm from './ContactForm';

const mapStateToProps = state => {
  return {
    contacts: getAllContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
    showNotification: () => dispatch(toogleExistFlag()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
