import React from "react";
import DeleteIcon from "../assets/img/delete.svg";

const TransactionList = ({ transactions, handleDelete }) => {
  return (
    <div className="expense__history">
      <div className="header-title">History</div>
      <div className="inc-exp-items-container">
        {transactions.map((transaction) => {
          let transactionTypeClass =
            transaction.amount < 0 ? "exp-item" : "inc-item";
          return (
            <div
              key={new Date().getTime() + Math.random()}
              className={"d-flex " + transactionTypeClass}
            >
              <div className="d-flex item--title">
                <a onClick={() => handleDelete(transaction.id)}>
                  <img src={DeleteIcon} />
                </a>
                <h4>{transaction.title}</h4>
              </div>
              <div className="bold">${transaction.amount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionList;
