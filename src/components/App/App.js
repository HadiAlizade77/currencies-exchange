import React, { useState } from 'react';

export const App = ({
  currencyRate,
  setRate,
}) => {
  const [rateInput, setRateInput] = useState(currencyRate);

  const handleSetRate = (e) => {
    const { value } = e.target;

    setRateInput(value);
    setRate({ rate: parseInt(value, 10) });
  };

  return (
    <>
      <h1>TEST App.js</h1>
      <div>
        <form>
          <input
            type="number"
            value={rateInput}
            onChange={(e) => handleSetRate(e)}
          />
        </form>
      </div>
    </>
  );
};
