import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo-container">
          <img className="logo" src="/kitchen-logo.jpg" alt="blue flames" />
          <h2 className="logo-name">Surprise Kitchen</h2>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Meal Plans</a>
            </li>
            <li>
              <a href="">Hire A Chef</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
