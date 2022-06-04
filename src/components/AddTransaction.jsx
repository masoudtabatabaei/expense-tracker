import React , { useState } from "react";

const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="header-title">Add new transaction</div>
      <form method="POST">
        <label>
          <div className="input-label">Title</div>
          <input
            className="input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </label>
        <label>
          <div className="input-label">Amount</div>
          <input
            className="input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </label>
        <button className="fullwidth bold">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
