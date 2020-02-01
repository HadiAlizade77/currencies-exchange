import React, { useState } from 'react';
import { InputElement } from '../../styles';
import { removeValidationError, getRoundedValue } from '../../utils';

export const AddTransaction = ({
  addTransaction,
  isTransactionNameDuplicated,
}) => {
  const [nameInput, setNameInput] = useState('');
  const [nameInputError, setNameInputError] = useState(false);
  const [amountInput, setAmountInput] = useState('');
  const [amountInputError, setAmountInputError] = useState(false);


  const handleAddTransaction = (e) => {
    e.preventDefault();
    console.log({ nameInput, amountInput });

    if (isTransactionNameDuplicated(nameInput)) {
      return setNameInputError('duplicated');
    }

    if (!nameInput) {
      return setNameInputError('no value');
    }

    if (!amountInput) {
      return setAmountInputError('no value');
    }

    if (amountInput <= 0) {
      return setAmountInputError('amount must be positive number');
    }

    const roundedAmount = getRoundedValue(amountInput);
    addTransaction({ name: nameInput, amount: roundedAmount });
  };

  const handleNameInput = (e) => {
    const { value } = e.target;

    removeValidationError(setNameInputError);
    setNameInput(_.trim(value));
  };

  const handleAmountInput = (e) => {
    const { value } = e.target;

    removeValidationError(setAmountInputError);
    setAmountInput(value);
  };


  return (
    <>
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
            onBlur={() => removeValidationError(setNameInputError)}
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
            onBlur={() => removeValidationError(setAmountInputError)}
            isValidationError={Boolean(amountInputError)}
          />
          <h4>{amountInputError || null}</h4>
        </div>


        <button>Add transaction</button>
      </form>
    </>
  );
};
