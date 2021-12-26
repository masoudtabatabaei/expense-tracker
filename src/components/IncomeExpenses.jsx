import React from 'react'

const IncomeExpenses = () => {
    return (
        <div className='income-expense-box d-flex'>
            <div className='income'>
                <div className='bold'>INCOME</div>
                <div className='income--value bold'><span>$</span>500.00</div>
            </div>
            <div className='expense'>
                <div className='bold'>EXPENSE</div>
                <div className='expense--value bold'><span>$</span>242.00</div>
            </div>
        </div>
    );
}

export default IncomeExpenses;