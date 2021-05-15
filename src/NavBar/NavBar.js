import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/cover.png";
import TokenService from "../services/token-service";

import "./NavBar.css";

const NavBar = (props) => {
  const logout = (e) => {
    TokenService.clearAuthToken();
    props.history.push("/");
  };

  return (
    <nav>
      
        {TokenService.hasAuthToken() ? (
          <>
            <section className="logo">
              <a href="/">
                <img src={Logo} className="nav-logo" alt="wanderer-logo"/>
              </a>
            </section>
            <ul className="navbar-links">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/home">
              Dashboard
            </Link>

            <Link className="nav-link" to="/add-location">
              Call Out
            </Link>

            <Link className="nav-link" to="/" onClick={logout}>
              Logout
            </Link>
            </ul>
          </>
        ) : (
          <>
            <section className="logo">
              <a href="/">
                <img src={Logo} width="200px" alt="wanderer-logo"/>
              </a>
            </section>
            <ul className="navbar-links">
            <Link className="nav-link" to="/login">
              Login
            </Link>

            <Link className="nav-link" to="/register">
              Register
            </Link>
            </ul>
          </>
        )}
    </nav>
  );
};

export default NavBar;
