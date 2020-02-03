import {
  getTransactions,
  getBiggestTransaction,
  getTransactionSum,
  isTransactionNameDuplicated,
} from '../../selectors';


const mockedState = {
  configuration: { rate: 2.00 },
  transactions: [{
    name: 'default',
    amount: 100,
  },
  {
    name: 'default2',
    amount: 1000,
  }],
};

it('gets transactions rate from state', () => {
  const result = getTransactions(mockedState);
  const expected = mockedState.transactions;

  expect(result).toEqual(expected);
  expect(result).toHaveLength(2);
});

it('gets the biggest transaction', () => {
  const result = getBiggestTransaction(mockedState);
  const expected = mockedState.transactions[1];

  expect(result).toEqual(expected);
});

it('gets sum of transactions', () => {
  const result = getTransactionSum(mockedState);
  const expected = 1100;

  expect(result).toEqual(expected);
});

it('returns true if transaction is duplicated', () => {
  const result = isTransactionNameDuplicated(mockedState)('default');

  expect(result).toBe(true);
});

it('returns false if transaction is not duplicated', () => {
  const result = isTransactionNameDuplicated(mockedState)('not_duplicated');

  expect(result).toBe(false);
});
