import React, { useState } from 'react';
import numeral from 'numeral';

export const App = ({
  currencyRate,
  setRate,
}) => {
  const [rateInput, setRateInput] = useState(currencyRate);

  const handleSetRate = (e) => {
    const { value } = e.target;
    const roundedValue = numeral(value).format('0.00');

    setRateInput(value);
    setRate({ rate: roundedValue });
  };

  return (
    <>
      <h1>TEST App.js</h1>
      <div>
        <form>
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
