import userInput from "../Hooks/userInput";

const isNotEmpty = value => value.trim() !== "";
const isEmail = value => value.includes("@");
const BasicForm = (props) => {
  const { value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName } = userInput(isNotEmpty);
  const { value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName } = userInput(isNotEmpty);
  const { value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail } = userInput(isEmail);
  
  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const submitHandler = event => {
    event.preventDefault();
    if (!formIsValid) {
      return
    };
    console.log("Submitted");
    console.log(firstNameValue, lastNameValue, emailValue);
    resetFirstName();
    resetLastName();
    resetEmail();

  };

  const firstNameClasses = firstNameHasError ? "formControl invalid" : "formControl";
  const lastNameClasses = lastNameHasError ? "formControl invalid" : "formControl";
  const emailClasses = emailHasError ? "formControl invalid" : "formControl";
  return (
    <form onSubmit={submitHandler}>
      <div className='controlGroup'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstNameValue} onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler} />
          {firstNameHasError && <p className="errorText">Please enter a first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastNameValue} onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} />
            {lastNameHasError && <p className="errorText">Please enter a last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={emailChangeHandler}
          onBlur={emailBlurHandler} />
          {emailHasError && <p className="errorText">Please enter a valid email</p>}
      </div>
      <div className='formActions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
