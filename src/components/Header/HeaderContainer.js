import { connect } from 'react-redux';
import { logOut } from '../../redux/session/sessionOperations';
import { getUserEmail, isAuthenticated } from '../../redux/session/sessionSelectors';
import Header from './Header';

const mapStateToProps = state => ({
  email: getUserEmail(state),
  isAuthenticated: isAuthenticated(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
