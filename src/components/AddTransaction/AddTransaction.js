import React, { useState } from 'react';
import { InputElement, WrapperDivElement } from '../../styles';
import { removeValidationError, getRoundedValue } from '../../utils';
import { ONLY_POSITIVE, DUPLICATED, NO_VALUE } from '../../constants';

export const AddTransaction = ({
  addTransaction,
  isTransactionNameDuplicated,
  rate,
}) => {
  const [nameInput, setNameInput] = useState('');
  const [nameInputError, setNameInputError] = useState(false);
  const [amountInput, setAmountInput] = useState('');
  const [amountInputError, setAmountInputError] = useState(false);

  const validateInput = () => {
    if (isTransactionNameDuplicated(nameInput)) {
      setNameInputError(DUPLICATED);
      return false;
    }

    if (!nameInput) {
      setNameInputError(NO_VALUE);
      return false;
    }

    if (!amountInput) {
      setAmountInputError(NO_VALUE);
      return false;
    }

    if (amountInput <= 0) {
      setAmountInputError(ONLY_POSITIVE);
      return false;
    }

    return true;
  };

  const handleAddTransaction = (e) => {
    e.preventDefault();

    const isInputValidated = validateInput();

    if (isInputValidated) {
      const roundedAmount = parseFloat(getRoundedValue(amountInput));

      addTransaction({ name: _.trim(nameInput), amount: roundedAmount });
    }
  };

  const handleNameInput = (e) => {
    const { value } = e.target;

    removeValidationError(setNameInputError);
    setNameInput(value);
  };

  const handleAmountInput = (e) => {
    const { value } = e.target;

    removeValidationError(setAmountInputError);
    setAmountInput(value);
  };

  return (
    <WrapperDivElement>
      <form
        onSubmit={(e) => handleAddTransaction(e)}
        noValidate={true}
      >
        <div>
          <label>Transaction name</label>
          <InputElement
            type='text'
            value={nameInput}
            onChange={(e) => handleNameInput(e)}
            isValidationError={Boolean(nameInputError)}
          />
          <h4>{nameInputError || null}</h4>
        </div>

        <div>
          <label>Amount in EUR</label>
          <InputElement
            type='number'
            value={amountInput}
            onChange={(e) => handleAmountInput(e)}
            isValidationError={Boolean(amountInputError)}
          />
          <h4>{amountInputError || null}</h4>
        </div>

        <div>
          <p>Amount in PLN: {getRoundedValue(amountInput * rate)}</p>
        </div>

        <button>Add transaction</button>
      </form>
    </WrapperDivElement>
  );
};
