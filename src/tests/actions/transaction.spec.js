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

  const result = {
    type: ADD_TRANSACTION,
    payload,
  };

  expect(addTransaction(payload)).toEqual(result);
});


it('removes transaction', () => {
  const name = 'test';

  const result = {
    type: REMOVE_TRANSACTION,
    payload: {
      name,
    },
  };

  expect(removeTransaction({ name })).toEqual(result);
});
