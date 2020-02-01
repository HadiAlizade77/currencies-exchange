import React from 'react';
import { getRoundedValue } from '../../utils';

export const TransactionItem = ({
  name,
  amount,
  rate,
  removeTransaction,
}) => (
    <>
      <p>Name: {name} - {amount} EUR - {getRoundedValue(amount * rate)} PLN</p>
      <button onClick={() => removeTransaction({ name })}>Remove transaction</button>
    </>);
