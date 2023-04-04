import { useRef, useState } from 'react';
import Input from '../../UI/Input'; 
import classes from "./MealItemForm.module.css"
const MealItemForm = (props) => {
  const [amountIsValıd, setAmountIsValıd] = useState(true)
  const amountInputRef = useRef();
  
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = + enteredAmount;
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
      setAmountIsValıd(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id : "amount_",
            type : "number",
            min : "1",
            max : "10",
            step : "1",
            defaultValue : "1"
        }} />
        <button className={classes.button}>Add</button>
        {!amountIsValıd && <p>Please enter a valid amount (1 - 10)</p>}
    </form>
  )
}

export default MealItemForm;