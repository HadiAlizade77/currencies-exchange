import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AddTransaction } from './AddTransaction';
import { getTransactions, isTransactionNameDuplicated } from '../../selectors';

export default connect(
  createStructuredSelector({
    transactions: getTransactions,
    isTransactionNameDuplicated,
  }),
)(AddTransaction);
