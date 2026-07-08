import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="logo">
        <NavLink to="/">Michael Robles</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/art">Art</NavLink>
        </li>
        <li>
          <NavLink to="/exhibitions">Exhibitions</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
