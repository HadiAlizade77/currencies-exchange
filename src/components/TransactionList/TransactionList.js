import React from 'react';
import { TransactionItem } from '..';

export const TransactionList = ({
  transactions,
  rate,
}) => {
  const transactionList = _.map(({ name, amount }) => <TransactionItem
    key={name}
    name={name}
    amount={amount}
    rate={rate} />, transactions);

  return (
    <>
      <h1>TEST TransactionList.js</h1>
      {transactionList}
    </>
  );
};
