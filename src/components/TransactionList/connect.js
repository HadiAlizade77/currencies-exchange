import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TransactionList } from './TransactionList';
import { getTransactions, getCurrencyRate, getBiggestTransaction } from '../../selectors';


// const mapDispatchToProps = (dispatch) => ({
//   setRate: (rate) => dispatch(setRate(rate)),
// });

export default connect(
  createStructuredSelector({
    transactions: getTransactions,
    rate: getCurrencyRate,
    biggestTransaction: getBiggestTransaction,
  }),
  // mapDispatchToProps,
)(TransactionList);
