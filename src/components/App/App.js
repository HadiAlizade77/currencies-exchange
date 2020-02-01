import React, { useState } from 'react';
import { getRoundedValue } from '../../utils';

export const App = ({
  currencyRate,
  setRate,
}) => {
  const [rateInput, setRateInput] = useState(currencyRate);

  const handleSetRate = (e) => {
    const { value } = e.target;
    const roundedValue = getRoundedValue(value);

    if (value < 0) {
      setRateInput(0.00);
      return setRate({ rate: 0.00 });
    }

    if (!value) {
      setRateInput('');
      return setRate({ rate: 0.00 });
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
