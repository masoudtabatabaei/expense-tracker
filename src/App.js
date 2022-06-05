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
      title: "Carwash",
      amount: -6,
    },
    {
      title: "Transfer",
      amount: 12,
    },
  ]);
  // on submit form
  const onSubmit = (inputs) => {
    setTransactions((prevTransactions) => [...prevTransactions, inputs]);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Balance />
        <div className="d-flex expense-container">
          <div className="expense__entry">
            <IncomeExpenses />
            <AddTransaction handleSubmit={onSubmit} />
          </div>
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </>
  );
}

export default App;
