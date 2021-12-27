import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <div className="d-flex expense-container">
          <div className="expense__entry">
            <IncomeExpenses />
            <div className="header-title">Add new transaction</div>
            <form method="POST">
              <label>
                <div className="input-label">Title</div>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter title"
                />
              </label>
              <label>
                <div className="input-label">Amount</div>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter amount"
                />
              </label>
              <button className="fullwidth bold">Add transaction</button>
            </form>
          </div>
          <div className="expense__history">
            <div className="header-title">History</div>
            <TransactionList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
