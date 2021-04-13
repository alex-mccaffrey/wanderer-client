import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/wanderer-logo.png"

import "./NavBar.css";

const NavBar = () => {
    
  return (
    <nav>
        <img src={Logo} width="100%" height="auto"/>
      <Link className="nav-link" to="/">
        Landing
      </Link>
      <Link className="nav-link" to="/home">
        Home
      </Link>
      <Link className="nav-link" to="/login">
        Login
      </Link>
      <Link className="nav-link" to="/register">
        Register
      </Link>
      <Link className="nav-link" to="/add-location">
        Add Location
      </Link>
    </nav>
  );
};

export default NavBar;
