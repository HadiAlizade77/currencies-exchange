import {
  SET_RATE,
} from '../actions';

export const configurationReducer = (state = { rate: 0 }, action) => {
  switch (action.type) {
    case SET_RATE:
      return {
        ...state,
        ...action.rate,
      };

    default:
      return state;
  }
};
