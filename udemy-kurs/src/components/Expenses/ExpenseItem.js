import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expenseItem'>
      <ExpenseDate date={props.date} />
      <div className='expenseItemDescription'>
        <h2>{props.title}</h2>
        <div className='expenseItemPrice'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;