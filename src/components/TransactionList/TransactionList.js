import React from 'react';
import { TransactionItem } from '..';
import { WrapperDivElement } from '../../styles';

export const TransactionList = ({
  transactions,
  rate,
}) => {
  const transactionList = _.map(({ name, amount }) => <TransactionItem
    key={name}
    name={name}
    amount={amount}
    rate={rate} />, transactions);

  const isTransactionListEmpty = !transactionList.length;

  return (
    <WrapperDivElement >
      <h2>List of transactions: </h2>
      {isTransactionListEmpty ? <p>No transactions</p> : transactionList}
    </WrapperDivElement>
  );
};
