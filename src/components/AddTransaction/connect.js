import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AddTransaction } from './AddTransaction';
import { getTransactions } from '../../selectors';

export default connect(
  createStructuredSelector({
    transactions: getTransactions,
  }),
)(AddTransaction);
