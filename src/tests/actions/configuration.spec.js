import { setRate } from '../../actions';
import { SET_RATE } from '../../constants';

it('sets given rate', () => {
  const rate = 2.00;

  const expected = {
    type: SET_RATE,
    rate,
  };

  expect(setRate(rate)).toEqual(expected);
});
