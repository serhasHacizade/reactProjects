import React, { useState } from "react";
import "./ExpenseForm.css"


const ExpenseForm = () => {

    const [enteredTitle, setEnteredtitle] = useState(" ");
    const [enteredAmount, setEnteredAmount] = useState(" ");
    const [enteredDate, setEnteredDate] = useState(" ");

    const titleChangeHandler = event => {setEnteredtitle(event.target.value);}
    const amountChangeHandler = event => {setEnteredAmount(event.target.value)}
    const dateChangeHandler = event => {setEnteredDate(event.target.value)}


    const submitHandler = event => {
        const expenseData = {
            //  this state's point useState
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="newExpenseControls">
                <div className="newExpenseControl">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="newExpenseControl">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="newExpenseControl">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="newExpenseActions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;