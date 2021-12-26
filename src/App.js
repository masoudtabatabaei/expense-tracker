import Header from './components/Header';
import Balance from './components/Balance';

import './App.scss';


function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <div className='d-flex expense-container'>
          <div className='expense__form'>
            <Balance/>
            <form>
              <label>
                <div className='input-label'>Title</div>
                <input className='input' type='text' placeholder='Enter title'/>
              </label>
              <label>
                <div className='input-label'>Amount</div>
                <input className='input' type='text' placeholder='Enter amount'/>
              </label>
              <button className='fullwidth bold'>Add transaction</button>
            </form>
          </div>
          <div className='expense__history'>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
