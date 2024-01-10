import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import UseFooter from "./useFooter";
import NavLink from "./NavLinks";

function navbarlink() {
  const navigate = useNavigate();
  return (
    <>
      <NavLink />
      <div className="Background-img">
        <button onClick={() => navigate("/menu")}>Order Now!</button>
      </div>
      <UseFooter />
    </>
  );
}

export default navbarlink;
