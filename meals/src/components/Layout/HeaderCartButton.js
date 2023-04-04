import classes from "./HeaderCartButton.module.css"
import {AiFillShopping} from "react-icons/ai"
import {useContext} from 'react';
import CartContext from "../../store/CartContext"

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return (currentNumber + item.amount);
  }, 0);


  return (
    <button className={classes.button} onClick={props.onClick}>
        <span >
            <AiFillShopping className={classes.icon} />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;