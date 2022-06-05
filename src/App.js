import { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import "./App.scss";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [balanceVal, setBalanceVal] = useState(
    transactions.reduce((acc, obj) => {
      return acc + obj.amount;
    }, 0)
  );
  const [incomeExpenseVal, setIncomeExpenseVal] = useState({
    income: 0,
    expense: 0,
  });

  // on submit form
  const onSubmit = (inputs) => {
    const newID =
      transactions.length > 0
        ? transactions[transactions.length - 1].id + 1
        : 1;
    const newItem = {
      ...inputs,
      id: newID,
    };

    +inputs.amount < 0
      ? setIncomeExpenseVal((values) => ({
          ...values,
          expense: values.expense + +inputs.amount,
        }))
      : setIncomeExpenseVal((values) => ({
          ...values,
          income: values.income + +inputs.amount,
        }));

    setTransactions((prevTransactions) => [...prevTransactions, newItem]);
    setBalanceVal((preveBalance) => preveBalance + +newItem.amount);
  };

  //handle delete item
  const handleDelete = (item) => {
    const filtered = [...transactions].filter(
      (transaction) => transaction.id != item.id
    );
    setBalanceVal((preveBalance) => preveBalance - +item.amount);
    +item.amount < 0
      ? setIncomeExpenseVal((values) => ({
          ...values,
          expense: values.expense - +item.amount,
        }))
      : setIncomeExpenseVal((values) => ({
          ...values,
          income: values.income - +item.amount,
        }));
    setTransactions(filtered);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Balance balanceVal={balanceVal} />
        <div className="d-flex expense-container">
          <div className="expense__entry">
            <IncomeExpenses incomeExpenseVal={incomeExpenseVal} />
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
