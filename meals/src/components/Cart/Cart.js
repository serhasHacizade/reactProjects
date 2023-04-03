import React from 'react';
import classes from "./Cart.module.css"
import Modal from '../UI/Modal';
const Cart = (props) => {
    const carItems = <ul className={classes["cartItems"]}>
        {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(item => <li>{item.name}</li>)}
    </ul>;

    return (
        <Modal>
            {carItems}
            <div>
                <span className={classes.total}>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;