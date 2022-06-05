import React, { useState } from "react";

const AddTransaction = ({ handleSubmit }) => {
  const [inputs, setInputs] = useState({});
  const [hasError, setHasError] = useState([false, ""]);

  // handleChange inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    setHasError([false, ""]);

    if (!inputs.title || inputs.title.trim() === "") {
      setHasError([true, "Title is required!"]);
      return;
    }

    if (!inputs.amount || +inputs.amount === 0) {
      setHasError([true, "Amount must be greater or lower than zero!"]);
      return;
    }

    handleSubmit(inputs);
  };

  return (
    <>
      <div className="header-title">Add new transaction</div>
      <form method="POST" onSubmit={onSubmit}>
        <label>
          <div className="input-label">Title</div>
          <input
            name="title"
            className="input"
            type="text"
            value={inputs.title || ""}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </label>
        <label>
          <div className="input-label">Amount</div>
          <input
            name="amount"
            className="input"
            type="number"
            value={inputs.amount || 0}
            onChange={handleChange}
            placeholder="Enter amount"
          />
        </label>
        {hasError[0] && <div className="error_msg">{hasError[1]}</div>}
        <button className="fullwidth bold">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
