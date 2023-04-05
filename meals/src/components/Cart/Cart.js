import React from 'react';
import classes from "./Cart.module.css"
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from "../../store/CartContext";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = "$ " + cartCtx.totalAmount.toFixed(2)
    const hasItems = cartCtx.items.length > 0;
    const carItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const carItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount : 1});
    };


    const carItems = <ul className={classes["cartItems"]}>
        {cartCtx.items.map(item => <CartItem key={item.id} name={item.name} 
        amount={item.amount} price={item.price} onRemove={carItemRemoveHandler.bind(null, item.id)} 
        onAdd={carItemAddHandler.bind(null, item)} />)}
    </ul>;

    return (
        <Modal onClose={props.onClose}>
            {carItems}
            <div>
                <span className={classes.total}>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["buttonAlt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;