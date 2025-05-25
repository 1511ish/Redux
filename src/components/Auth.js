import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

export default function Auth() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const passwordHandler = (e) => {
    e.preventDefault();
    console.log("password handler workign..");
    setPassword(e.target.value);
  }

  const formHandler = (e) => {
    e.preventDefault();
    if(email.length!=0 && email.includes("@") && password.length !=0){
      setEmail("");
      setPassword("");
      dispatch({ type: "login" })
    }else{
      alert("Enter email and password for login.");
    }
  }

  return (
    <>
      {
        isAuthenticated ?
          <div className={classes.counter}>
            <h2>My User Profile</h2>
          </div> :
          <form onSubmit={formHandler} className={classes.counter} >
            <div>
              <label htmlFor="mail">Email:</label>
              <input type="mail" id='mail' value={email} onChange={mailHandler} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type='password' id='password' value={password} onChange={passwordHandler} />
            </div>
            <button>LogIn</button>
          </form >
      }
    </>
  )
}
