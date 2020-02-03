import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
} from '../../constants';

import { transactionReducer } from '../../reducers';


const defaultState = [];

const mockedState = [{
  name: 'default',
  amount: 100,
}];

it('fallbacks to the default state', () => {
  expect(transactionReducer(defaultState, {})).toEqual(defaultState);
});

it('adds transaction to state', () => {
  const action = {
    type: ADD_TRANSACTION,
    payload: {
      name: 'test',
      amount: 1000,
    },
  };

  const result = transactionReducer(mockedState, action);

  const expected = [
    ...mockedState,
    action.payload,
  ];

  expect(result).toEqual(expected);
});

it('removes transaction from state', () => {
  const action = {
    type: REMOVE_TRANSACTION,
    payload: {
      name: 'default',
    },
  };

  const result = transactionReducer(mockedState, action);

  expect(result).toEqual([]);
});
