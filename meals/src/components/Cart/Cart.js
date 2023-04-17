import React, { useState } from 'react';
import classes from "./Cart.module.css"
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from "../../store/CartContext";
import CheckOut from './CheckOut';


const Cart = (props) => {
    const [isCheckOut, setIsChechOut] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = "$ " + cartCtx.totalAmount.toFixed(2)
    const hasItems = cartCtx.items.length > 0;
    const carItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const carItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };


    const orderHandler = () => {
        setIsChechOut(true);
    };

    const carItems = <ul className={classes["cartItems"]}>
        {cartCtx.items.map(item => <CartItem key={item.id} name={item.name}
            amount={item.amount} price={item.price} onRemove={carItemRemoveHandler.bind(null, item.id)}
            onAdd={carItemAddHandler.bind(null, item)} />)}
    </ul>;

    const modalActions = <div className={classes.actions}>
        <button className={classes["buttonAlt"]} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>

    return (
        <Modal onClose={props.onClose}>
            {carItems}

            <span className={classes.total}>Total Amount : {totalAmount}</span>

            {isCheckOut && <CheckOut />}
            {!isCheckOut && modalActions}

        </Modal>
    )
}

export default Cart;