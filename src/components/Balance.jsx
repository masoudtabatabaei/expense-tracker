import React from "react";

const Balance = ({ balanceVal }) => {
  return (
    <div className="balance">
      <div>Your Balance</div>
      <div className="bold">
        <span>$</span>&nbsp;<span>{balanceVal}</span>
      </div>
    </div>
  );
};

export default Balance;
