import React from 'react';

export const TransactionItem = ({
  name,
  amount,
  rate,
}) => (
    <p>{name} - {amount} EUR - {amount * rate} PLN</p>);
