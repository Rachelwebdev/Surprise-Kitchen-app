import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const linkStyles = {
    display: "inline-block",
    padding: "15px",
    fontSize: "18px",
    margin: "3px",
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
      <nav className="nav-bar">
        <div className="logo-container">
          <img className="logo" src="/kitchen-logo.jpg" alt="blue flames" />
          <h2 className="logo-name">Surprise Kitchen</h2>
        </div>
        <div className="nav-list">
          <ul>
            <NavLink
              to="/"
              exact={getValue.toString()}
              style={linkStyles}
              activestyle={{ background: "rgb(255, 149, 0)" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/details"
              exact={getValue.toString()}
              style={linkStyles}
              activestyle={{ background: "rgb(255, 149, 0)" }}
            >
              Meal Plans
            </NavLink>
            <NavLink
              to="/contact"
              exact={getValue.toString()}
              style={linkStyles}
              activestyle={{ background: "rgb(255, 149, 0)" }}
            >
              Hire A Chef
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
