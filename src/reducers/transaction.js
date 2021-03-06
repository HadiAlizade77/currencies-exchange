import {
  ADD_TRANSACTION,
  REMOVE_TRANSACTION,
} from '../constants';

export const transactionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [
        ...state,
        action.payload,
      ];

    case REMOVE_TRANSACTION:
      return state.filter((transaction) => transaction.name !== action.payload.name);

    default:
      return state;
  }
};
