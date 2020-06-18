import { connect } from 'react-redux';
import { deleteAccount } from '../../redux/account/accountOperations';
import { getUserEmail, getUserName } from '../../redux/account/accountSelectors';
import { getAllContacts } from '../../redux/phonebook/selectors';
import { downloadContacts } from '../../redux/phonebook/operations';
import AccountInfo from './AccountInfo';

const mapStateToProps = state => ({
  name: getUserName(state),
  email: getUserEmail(state),
  contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteAccount: () => dispatch(deleteAccount()),
  getUserContacts: () => dispatch(downloadContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
