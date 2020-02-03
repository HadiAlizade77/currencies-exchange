import { getCurrencyRate } from '../../selectors';

it('gets currency rate from state', () => {
  const mockedState = {
    configuration: { rate: 2.00 },
    transactions: [],
  };

  const result = getCurrencyRate(mockedState);
  const expected = mockedState.configuration.rate;

  expect(result).toEqual(expected);
});
