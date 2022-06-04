import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import "./App.scss";

function App() {
  return (
    <>
      <div className="container">
      <Header />
        <Balance />
        <div className="d-flex expense-container">
          <div className="expense__entry">
            <IncomeExpenses />
            <AddTransaction/>
          </div>
          <TransactionList />
        </div>
      </div>
    </>
  );
}

export default App;
