import classes from "./CheckOut.module.css";
import { useRef, useState } from "react";

const isEmpty = value => value.trim() === "";
const isFiveChars = value => value.trim().length === 5;

const CheckOut = (props) => {
    const [formValid, setFormValid] = useState({
        name : true,
        street : true,
        city : true,
        postalCode : true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();
        const enteredNameIsValid = !isEmpty(nameInputRef.current.value);
        const enteredStreetIsValid = !isEmpty(streetInputRef.current.value);
        const enteredCityIsValid = !isEmpty(cityInputRef.current.value);
        const enteredPostalCodeIsValid = isFiveChars(postalCodeInputRef.current.value);
        
        setFormValid({
            name : enteredNameIsValid,
            street : enteredStreetIsValid,
            city : enteredCityIsValid,
            postalCode : enteredPostalCodeIsValid
        });
        if (!(enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalCodeIsValid)) {return};
        props.onConfirm({
            name : nameInputRef.current.value,
            street : streetInputRef.current.value,
            city : cityInputRef.current.value,
            postalCode : postalCodeInputRef.current.value
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formValid.name ? "" : classes.invalid}`}>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formValid.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={`${classes.control} ${formValid.street ? "" : classes.invalid}`}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formValid.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={`${classes.control} ${formValid.postalCode ? "" : classes.invalid}`}>
                <label htmlFor="postal">Postal code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
                {!formValid.name && <p>Please enter a valid postal code!</p>}
            </div>
            <div className={`${classes.control} ${formValid.city ? "" : classes.invalid}`}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formValid.name && <p>Please enter a city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default CheckOut