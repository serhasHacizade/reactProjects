import classes from "./HeaderCartButton.module.css"
import { AiFillShopping } from "react-icons/ai"
import { useContext, useEffect, useState } from 'react';
import CartContext from "../../store/CartContext"

const HeaderCartButton = (props) => {
  const [btnIsHigh, setBtnIsHigh] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } =  cartCtx;
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return (currentNumber + item.amount);
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHigh(true);
    const timer = setTimeout(() => {setBtnIsHigh(false)}, 300);
    return () => {clearTimeout(timer)};
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span >
        <AiFillShopping className={classes.icon} />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;