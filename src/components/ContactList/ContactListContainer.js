import { connect } from 'react-redux';
import ContactList from './ContactList';
import { getFilteredContacts } from '../../redux/phonebook/selectors';

const mapStateToProps = state => {
  return {
    filteredContacts: getFilteredContacts(state),
  };
};

export default connect(mapStateToProps, null)(ContactList);
