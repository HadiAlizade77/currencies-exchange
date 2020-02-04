import React from 'react';
import { TransactionItem } from '..';
import { WrapperDivElement } from '../../styles';
import { getRoundedValue } from '../../utils';

export const TransactionList = ({
  transactions,
  rate,
  biggestTransaction,
  transactionSum,
}) => {
  const transactionList = _.map(({ name, amount }) => <TransactionItem
    key={name}
    name={name}
    amount={amount}
    rate={rate} />, transactions);

  const isTransactionListEmpty = !transactionList.length;

  return (
    <WrapperDivElement>
      {!isTransactionListEmpty
        ? <>
          <h2>The biggest transaction: </h2>
          <p>
            {`Name: ${biggestTransaction.name}`}
          </p>
          <p>
            {`Amount: ${biggestTransaction.amount} EUR
          - ${getRoundedValue(biggestTransaction.amount * rate)} PLN`}
          </p>

          <h2>Sum of transactions: </h2>
          <p>{transactionSum} EUR</p>
        </>
        : null
      }

      <h2>List of transactions: </h2>
      {isTransactionListEmpty ? <p>No transactions</p> : transactionList}
    </WrapperDivElement>
  );
};
