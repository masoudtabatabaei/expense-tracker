import React from "react";
import DeleteIcon from "../assets/img/delete.svg";

const TransactionList = () => {
  return (
    <div className="expense__history">
      <div className="header-title">History</div>
      <div className="inc-exp-items-container">
        <div className="d-flex inc-item">
          <div className="d-flex item--title">
            <a>
              <img src={DeleteIcon} />
            </a>
            <h4>Carwash</h4>
          </div>
          <div className="bold">+$6.00</div>
        </div>
        <div className="d-flex exp-item">
          <div className="d-flex item--title">
            <a>
              <img src={DeleteIcon} />
            </a>
            <h4>Transfer</h4>
          </div>
          <div className="bold">-$6.00</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
