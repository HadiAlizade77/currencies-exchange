import {
  SET_RATE,
} from '../constants';

const DEFAULT_RATE = 1.99;

export const configurationReducer = (state = {
  rate: DEFAULT_RATE,
}, action) => {
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
