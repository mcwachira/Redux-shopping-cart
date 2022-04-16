import React from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/Auth-slice";

import "./Auth.css";


const Auth = () => {

  //we handle our auth action in this page
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.logIn())

  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
