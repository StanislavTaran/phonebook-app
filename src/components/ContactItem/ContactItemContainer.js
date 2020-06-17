import { connect } from 'react-redux';
import ContactItem from './ContactItem';

import { deleteContact } from '../../redux/phonebook/operations';

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
