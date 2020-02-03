import {
  SET_RATE,
  DEFAULT_RATE,
} from '../../constants';

import { configurationReducer } from '../../reducers';

const defaultState = {
  rate: DEFAULT_RATE,
};


it('fallbacks to the default state', () => {
  expect(configurationReducer(defaultState, {})).toEqual(defaultState);
});


it('updates state on rate change', () => {
  const action = {
    type: SET_RATE,
    rate: 5.00,
  };

  const { rate } = action;

  const expected = configurationReducer(defaultState, action);

  expect(expected).toEqual({ rate });
});
