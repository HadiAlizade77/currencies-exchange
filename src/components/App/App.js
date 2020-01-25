import React, { useState } from 'react';

export const App = ({
  currencyRate,
  setRate,
}) => {
  const [rateInput, setRateInput] = useState(currencyRate);

  const handleSetRate = (e) => {
    const { value } = e.target;
    const roundedValue = parseFloat(value).toFixed(2);

    if (!value || value < 0) {
      setRateInput(0.01);
      return setRate({ rate: 0.01 });
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
