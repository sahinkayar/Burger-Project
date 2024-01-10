import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./images/a35554ea00f9f65bf7c6ef6051d4e98e.png";
function NavLinks() {
  return (
    <div>
      <div className="Navbar">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="NavLinks">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Menu">Menu</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
