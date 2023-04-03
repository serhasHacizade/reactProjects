import React from 'react';
import classes from "./HeaderCartButton.module.css"
import {AiFillShopping} from "react-icons/ai"
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
        <span >
            <AiFillShopping className={classes.icon} />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton;