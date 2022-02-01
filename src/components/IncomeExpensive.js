import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function IncomeExpensive() {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(t => t.amount);

  const income = amounts.filter(a => a > 0).reduce((t,a) => t += a, 0);
  const expense = amounts.filter(a => a < 0).reduce((t,a) => t += a, 0);


  return (
      <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
      </>
  );
}
