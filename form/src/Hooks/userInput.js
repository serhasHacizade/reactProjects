import { useState, useReducer } from 'react'

const initialInputState = {
    value : "",
    isTouched : false
};

const inputStateReducer = (state, action) => {
    if (action.target === "INPUT") {
        return {value : action.value, isTouched : state.isTouched};
    } 
    if (action.target === "BLUR") {
        return {isTouched : true, value : state.value};
    }
    if (action.target === "RESET") {
        return {isTouched : false, value : ""};
    }
    return inputStateReducer;
};
const UserInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)
    
    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({type : "INPUT", value : event.target.value});
    };

    const inputBlurHandler = event => {
        dispatch({type : "BLUR"});
    };

    const reset = () => {
        dispatch({type : "RESET"});
    };

    return {
        value: inputState.value,
        isValid : valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default UserInput