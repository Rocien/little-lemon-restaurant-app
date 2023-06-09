import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/nav-logo.png";

export default function Nav() {
  return(
    <nav className="nav-container">
      <Link to="/">
        <img src={logo} className="nav-logo" alt="Little lemon logo" />
      </Link>
      <ul className="navbar">
          <li>
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <h1>About</h1>
            </Link>
          </li>
          <li>
            <a
            className="hover-effect"
            href={require("../assets/menu.jpeg")}
            target="_blank"
            rel="noreferrer">
              <h1>Menu</h1>
            </a>
          </li>
          <li>
            <Link to="/reservations">
              <h1>Reservations</h1>
            </Link>
          </li>
          <li>
            <Link to="/order">
              <h1>Order online</h1>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <h1>Login</h1>
            </Link>
          </li>
        </ul>
    </nav>
  )
}