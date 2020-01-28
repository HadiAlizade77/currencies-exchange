import React from 'react';

export const TransactionItem = ({
  name,
  amount,
  rate,
  removeTransaction,
}) => (
    <>
      <p>{name} - {amount} EUR - {amount * rate} PLN</p>
      <button onClick={() => removeTransaction({ name })}>Remove transaction</button>
    </>);
