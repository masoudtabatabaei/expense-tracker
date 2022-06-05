import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import "./App.scss";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Carwash",
      amount: -6,
    },
    {
      id: 2,
      title: "Transfer",
      amount: 120,
    },
  ]);
  const [balanceVal, setBalanceVal] = useState(
    transactions.reduce((acc, obj) => {
      return acc + obj.amount;
    }, 0)
  );

  // on submit form
  const onSubmit = (inputs) => {
    const newItem = {
      ...inputs,
      id: transactions[transactions.length - 1].id + 1,
    };
    setTransactions((prevTransactions) => [...prevTransactions, newItem]);
    setBalanceVal((preveBalance) => preveBalance + +newItem.amount);
  };

  //handle delete item
  const handleDelete = (id) => {
    console.log("id: " + id);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Balance balanceVal={balanceVal} />
        <div className="d-flex expense-container">
          <div className="expense__entry">
            <IncomeExpenses />
            <AddTransaction handleSubmit={onSubmit} />
          </div>
          <TransactionList
            transactions={transactions}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
