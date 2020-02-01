import React, { useState } from 'react';
import { getRoundedValue } from '../../utils';
import { DEFAULT_RATE } from '../../constants';

export const App = ({
  currencyRate,
  setRate,
}) => {
  const [rateInput, setRateInput] = useState(currencyRate);

  const handleSetRate = (e) => {
    const { value } = e.target;
    const roundedValue = getRoundedValue(value);

    if (value < 0) {
      setRateInput(DEFAULT_RATE);
      return setRate({ rate: DEFAULT_RATE });
    }

    if (!value) {
      setRateInput('');
      return setRate({ rate: DEFAULT_RATE });
    }

    setRateInput(value);
    setRate({ rate: roundedValue });
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <h1>TEST App.js</h1>
      <div>
        <form
          onSubmit={handleSubmit}
          noValidate={true}
        >
          <label>Set rate: </label>
          <input
            type="number"
            value={rateInput}
            onChange={(e) => handleSetRate(e)}
            autoFocus={true}
          />
        </form>
        <div>
          <p>Current rate: {currencyRate}</p>
        </div>
      </div>
    </>
  );
};
