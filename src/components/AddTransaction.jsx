import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GithubIcon from "../assets/img/github.png";

const AddTransaction = ({ handleSubmitForm }) => {
  const [inputs, setInputs] = useState({});
  const [hasError, setHasError] = useState([false, ""]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle submit
  const onSubmit = (data) => {
    setHasError([false, ""]);
    if (data.title.trim() === "") {
      setHasError([true, "Title isn't valid"]);
      return;
    }

    if (+data.amount === 0) {
      setHasError([true, "Amount must be greater or lower than zero!"]);
      return;
    }

    data.amount = +data.amount;
    reset({ title: "", amount: "" });
    handleSubmitForm(data);
  };

  return (
    <>
      <div className="header-title">Add new transaction</div>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div className="input-label">Title</div>
          <input
            name="title"
            className="input"
            type="text"
            value={inputs.title}
            placeholder="Enter title"
            {...register("title", { required: true, minLength: 1 })}
          />
        </label>
        {errors.title && <div className="error_msg">Title is required!</div>}
        <label>
          <div className="input-label">Amount</div>
          <input
            name="amount"
            className="input"
            type="number"
            value={inputs.amount}
            placeholder="Enter amount"
            {...register("amount", { required: true })}
          />
        </label>
        {hasError[0] && <div className="error_msg">{hasError[1]}</div>}
        {errors.amount && <div className="error_msg">Amount is required!</div>}
        <button className="fullwidth bold">Add transaction</button>
      </form>
      <div className="github">
        <a href="https://github.com/masoudtabatabaei">
          <img src={GithubIcon} alt="my github link" />
        </a>
      </div>
    </>
  );
};

export default AddTransaction;
