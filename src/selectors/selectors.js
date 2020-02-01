export const getCurrencyRate = ({ configuration }) => configuration.rate;

export const getTransactions = ({ transactions }) => transactions;

export const isTransactionNameDuplicated = (state) => (name) => _.compose(
  Boolean,
  _.find({ name }),
  getTransactions,
)(state);
