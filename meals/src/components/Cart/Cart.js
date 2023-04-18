import React, { useState } from 'react';
import classes from "./Cart.module.css"
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from "../../store/CartContext";
import CheckOut from './CheckOut';


const Cart = (props) => {
    const [isCheckOut, setIsChechOut] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
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

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch("https://meals-a0525-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
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

    const cartModalContent = <>
        {carItems}
        <span className={classes.total}>Total Amount : {totalAmount}</span>
        {isCheckOut && <CheckOut onConfirm={submitOrderHandler} onCancel={props.onClose} />}
        {!isCheckOut && modalActions}
    </>
    const isSubmittingModalContent = <p>Sending ordar data...</p>
    const didSubmitModalContent = <>
        <p>Succesfully sende the order!</p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={props.onClose}>Close</button>
        </div>
    </>
    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default Cart;