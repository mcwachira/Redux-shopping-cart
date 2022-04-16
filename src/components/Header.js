import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import { cartActions } from "../store/cart-slice";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch()

  const displayCart = () => {
    dispatch(cartActions.setShowCart())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li onClick={displayCart}>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
