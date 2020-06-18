import { connect } from 'react-redux';
import ContactList from './ContactList';
import { getFilteredSortedContacts } from '../../redux/phonebook/selectors';

const mapStateToProps = state => {
  return {
    filteredContacts: getFilteredSortedContacts(state),
  };
};

export default connect(mapStateToProps, null)(ContactList);
