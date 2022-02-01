import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Balence() {

   const {transactions} = useContext(GlobalContext);

   const amounts = transactions.map(t => t.amount);

   const total = amounts.reduce((t,a) => t += a,0).toFixed(2);

  return (
      <>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
      </>
  );
}
