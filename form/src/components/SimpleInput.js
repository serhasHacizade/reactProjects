import userInput from "../Hooks/userInput";

const SimpleInput = (props) => {
  const { value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput } = userInput(value => value.trim() !== "");


  const { value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput } = userInput(value => value.includes("@"));


  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };
  const nameInputClasses = nameInputHasError ? "formControl invalid" : "formControl"
  const emailInputClasses = emailInputHasError ? "formControl invalid" : "formControl"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={nameBlurHandler} value={enteredName} type='text' id='name' onChange={nameChangeHandler} />
        {nameInputHasError && <p className="errorText">Name must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input onBlur={emailBlurHandler} value={enteredEmail} type='email' id='email' onChange={emailChangeHandler} />
        {emailInputHasError && <p className="errorText">Please enter a valid email!</p>}
      </div>
      <div className="formActions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
