import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const { totItems } = useContext(CartContext);
  return (
    <header className="navbar">
      <Link to="/" className="logo-wrapper">
        <img src="/img/logo.png" alt="logo" className="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart {totItems > 0 && <span className="badge">{totItems}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
