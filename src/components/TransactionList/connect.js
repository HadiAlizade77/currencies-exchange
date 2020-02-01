import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TransactionList } from './TransactionList';
import {
  getTransactions,
  getCurrencyRate,
  getBiggestTransaction,
  getTransactionSum,
} from '../../selectors';

export default connect(
  createStructuredSelector({
    transactions: getTransactions,
    rate: getCurrencyRate,
    biggestTransaction: getBiggestTransaction,
    transactionSum: getTransactionSum,
  }),
)(TransactionList);
