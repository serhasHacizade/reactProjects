import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import SuccesSubmit from "../components/SuccesSubmit";

const Login = () => {

  const navigate = useNavigate();

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>Username </label>
          <input type="text" name="uname" className="text" placeholder="type user1" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="inputContainer">
          <label>Password </label>
          <input type="password" name="pass" className="password" placeholder="type pass1" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="buttonContainer">
          <button type="submit" className="submit">Login</button>
        </div>
      </form>
    </div>
  );
    
  return (
    <div className="app">
      <div className="loginForm">
        <div className="title">Sign In</div>
        {isSubmitted ? <SuccesSubmit/>  : renderForm}
      </div>
    </div>
  );
}

export default Login;