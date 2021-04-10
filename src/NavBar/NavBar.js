import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
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
