import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Rate } from './Rate';
import { getCurrencyRate } from '../../selectors';
import { setRate } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  setRate: (rate) => dispatch(setRate(rate)),
});

export default connect(
  createStructuredSelector({ currencyRate: getCurrencyRate }),
  mapDispatchToProps,
)(Rate);
