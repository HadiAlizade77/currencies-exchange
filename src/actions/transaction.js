import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
} from '../constants';

export const addTransaction = ({ name, amount }) => ({
  type: ADD_TRANSACTION,
  payload: {
    name,
    amount,
  },
});

export const removeTransaction = ({ name }) => ({
  type: REMOVE_TRANSACTION,
  payload: {
    name,
  },
});
