import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { App } from './App';
import { getCurrencyRate } from '../../selectors';

export default connect(
  createStructuredSelector({ currencyRate: getCurrencyRate }),
)(App);
