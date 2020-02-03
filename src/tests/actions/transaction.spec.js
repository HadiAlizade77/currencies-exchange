import {
  addTransaction,
  removeTransaction,
} from '../../actions';
import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
} from '../../constants';

it('adds transaction', () => {
  const payload = {
    name: 'test',
    amount: 100,
  };

  const expected = {
    type: ADD_TRANSACTION,
    payload,
  };

  expect(addTransaction(payload)).toEqual(expected);
});


it('removes transaction', () => {
  const name = 'test';

  const expected = {
    type: REMOVE_TRANSACTION,
    payload: {
      name,
    },
  };

  expect(removeTransaction({ name })).toEqual(expected);
});
