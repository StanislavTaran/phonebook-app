import { connect } from 'react-redux';
import { changeFilterAction } from '../../redux/phonebook/actions';
import Filter from './Filter';

const mapDispatchToProps = dispatch => ({
  hanleFilterChange: filter => dispatch(changeFilterAction(filter)),
});

export default connect(null, mapDispatchToProps)(Filter);
