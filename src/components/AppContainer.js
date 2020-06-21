import { connect } from 'react-redux';
import { getIsLoading } from '../redux/app/appSelectors';
import { refreshUser } from '../redux/session/sessionOperations';
import App from './App';

const mapStateToProps = state => {
  return {
    isLoading: getIsLoading(state),
  };
};

const mapDispatchToProps = {
  refreshCurrentUser: refreshUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
