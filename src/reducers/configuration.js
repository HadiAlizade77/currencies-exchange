import {
  SET_RATE,
  DEFAULT_RATE,
} from '../constants';

export const configurationReducer = (state = {
  rate: DEFAULT_RATE,
}, action) => {
  switch (action.type) {
    case SET_RATE:
      return {
        ...state,
        rate: action.rate,
      };

    default:
      return state;
  }
};
