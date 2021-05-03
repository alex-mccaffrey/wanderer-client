import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/wanderer-logo.png";
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
              <a href="/home">
                <img src={Logo} width="200px" />
              </a>
            </section>
            <ul className="navbar-links">
            <Link className="nav-link" to="/home">
              Home
            </Link>

            <Link className="nav-link" to="/add-location">
              Add Location
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
                <img src={Logo} width="200px" />
              </a>
            </section>
            <ul className="navbar-links">
            <Link className="nav-link" to="/login">
              Login
            </Link>

            <Link className="nav-link" to="/register">
              Register
            </Link>

            {/* <Link className="nav-link" to="/">
              Landing
            </Link> */}
            </ul>
          </>
        )}
    </nav>
  );
};

export default NavBar;
