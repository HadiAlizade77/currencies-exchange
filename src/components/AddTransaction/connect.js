import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AddTransaction } from './AddTransaction';
import { getTransactions, isTransactionNameDuplicated, getCurrencyRate } from '../../selectors';
import { addTransaction } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (payload) => dispatch(addTransaction(payload)),
});

export default connect(
  createStructuredSelector({
    transactions: getTransactions,
    rate: getCurrencyRate,
    isTransactionNameDuplicated,
  }),
  mapDispatchToProps,
)(AddTransaction);
