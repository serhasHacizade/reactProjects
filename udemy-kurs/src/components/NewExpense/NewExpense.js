import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    return (
        <div className="newExpense">
            <ExpenseForm/>
        </div>
    )
}

export default NewExpense;