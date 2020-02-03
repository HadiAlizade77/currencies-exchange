export const getTransactions = ({ transactions }) => transactions;

export const getBiggestTransaction = _.compose(
  _.maxBy('amount'),
  getTransactions,
);

export const getTransactionSum = _.compose(
  _.sumBy('amount'),
  getTransactions,
);

export const isTransactionNameDuplicated = (state) => (name) => _.compose(
  Boolean,
  _.find({ name: _.trim(name) }),
  getTransactions,
)(state);
