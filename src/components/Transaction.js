import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {

  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? 'plus' : 'minus';
  return (
    <li className={sign}>
        {transaction.text} <span>${transaction.amount}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};
