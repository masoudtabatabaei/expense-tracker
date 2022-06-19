import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, handleDelete }) => {
  return (
    <div className="expense__history">
      <div className="header-title">History</div>
      <div className="inc-exp-items-container">
        {transactions.map((transaction) => {
          let transactionTypeClass =
            transaction.amount < 0 ? "exp-item" : "inc-item";
          return (
            <TransactionItem
              key={transaction.id + Math.floor(Math.random())}
              transaction={transaction}
              transactionTypeClass={transactionTypeClass}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
