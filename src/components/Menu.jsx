import React from "react";
import Beef from "./images/king-beef-burger-menu.png";
import "../App.css";
import Logo from "./images/a35554ea00f9f65bf7c6ef6051d4e98e.png";
import { NavLink } from "react-router-dom";
import UseFooter from "./useFooter";
function Menu() {
  return (
    <>
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
      <h1>Burgerlerimiz</h1>
      <div className="container">
        <div className="row col-md-12">
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
        </div>{" "}
        <div className="row col-md-12">
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
        </div>
        <div className="row col-md-12">
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
          <div className="card col-md-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
          <div className="card col-lg-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>{" "}
          </div>
        </div>
        <div className="row col-md-12">
          <div className="card col-lg-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
          <div className="card col-lg-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>
          <div className="card col-lg-4" style={{ width: "18rem" }}>
            <img className="card-img-top" src={Beef} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Special Burger</h5>
              <p className="card-text">
                To buy for special prize click the button below!
              </p>
              <a className="btn btn-danger">Order!</a>
            </div>
          </div>{" "}
        </div>
      </div>
      <UseFooter />
    </>
  );
}

export default Menu;
