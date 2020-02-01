import React from 'react';
import { TransactionItem } from '..';
import { WrapperDivElement } from '../../styles';
import { getRoundedValue } from '../../utils';

export const TransactionList = ({
  transactions,
  rate,
  biggestTransaction,
}) => {
  const transactionList = _.map(({ name, amount }) => <TransactionItem
    key={name}
    name={name}
    amount={amount}
    rate={rate} />, transactions);

  const isTransactionListEmpty = !transactionList.length;

  console.log({ biggestTransaction });

  return (
    <WrapperDivElement>
      {!isTransactionListEmpty
        ? <>
          <h2>The biggest transaction: </h2>
          {`Transaction name: ${biggestTransaction.name} - amount: ${biggestTransaction.amount} EUR - ${getRoundedValue(biggestTransaction.amount * rate)} PLN`}
        </>
        : null
      }

      <h2>List of transactions: </h2>
      {isTransactionListEmpty ? <p>No transactions</p> : transactionList}
    </WrapperDivElement>
  );
};
