import classes from "./CheckOut.module.css";
import React from 'react'

const CheckOut = (props) => {
    return (
        <form>
            <div className={classes.control}>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal code</label>
                <input type="text" id="postal" />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
            </div>
            <button>Confirm</button>
        </form>
    )
}

export default CheckOut