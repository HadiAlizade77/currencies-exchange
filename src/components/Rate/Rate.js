import React, { useState } from 'react';
import { getRoundedValue } from '../../utils';
import { DEFAULT_RATE } from '../../constants';
import { WrapperDivElement } from '../../styles';

export const Rate = ({
  currencyRate,
  setRate,
}) => {
  const [rateInput, setRateInput] = useState(currencyRate);

  const handleSetRate = (e) => {
    const { value } = e.target;
    const roundedValue = getRoundedValue(value);

    if (value < 0) {
      setRateInput(DEFAULT_RATE);
      return setRate(DEFAULT_RATE);
    }

    if (!value) {
      setRateInput('');
      return setRate(DEFAULT_RATE);
    }

    setRateInput(value);
    setRate(roundedValue);
  };

  const handleSubmit = (e) => e.preventDefault();

  return (
    <WrapperDivElement>
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
    </WrapperDivElement>
  );
};
