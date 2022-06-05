import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import "./App.scss";

function App() {
  // on submit form
  const onSubmit = (inputs) => {
    console.log("--- Submit form ----", inputs);
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
          <TransactionList />
        </div>
      </div>
    </>
  );
}

export default App;
