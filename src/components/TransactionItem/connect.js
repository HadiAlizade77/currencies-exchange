import { connect } from 'react-redux';
import { TransactionItem } from './TransactionItem';
import { removeTransaction } from '../../actions';


const mapDispatchToProps = (dispatch) => ({
  removeTransaction: (name) => dispatch(removeTransaction(name)),
});

export default connect(
  null,
  mapDispatchToProps,
)(TransactionItem);
