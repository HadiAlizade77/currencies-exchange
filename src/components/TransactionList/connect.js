import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { TransactionList } from './TransactionList';
import { getTransactions, getCurrencyRate } from '../../selectors';


// const mapDispatchToProps = (dispatch) => ({
//   setRate: (rate) => dispatch(setRate(rate)),
// });

export default connect(
  createStructuredSelector({
    transactions: getTransactions,
    rate: getCurrencyRate,
  }),
  // mapDispatchToProps,
)(TransactionList);
