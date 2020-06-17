import { connect } from 'react-redux';
import { getExistContactFlag } from '../redux/phonebook/selectors';
import { refreshUser } from '../redux/session/sessionOperations';
import App from './App';

const mapStateToProps = state => {
  return {
    isAlreadyinContacts: getExistContactFlag(state),
  };
};

const mapDispatchToProps = {
  refreshCurrentUser: refreshUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
