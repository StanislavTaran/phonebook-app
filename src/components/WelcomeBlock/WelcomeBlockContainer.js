import { connect } from 'react-redux';
import WelcomeBlock from './WelcomeBlock';
import { getUserName } from '../../redux/account/accountSelectors';

const mapStateToProps = state => ({
  name: getUserName(state),
});

export default connect(mapStateToProps)(WelcomeBlock);
