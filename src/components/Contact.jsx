import React from "react";
import Image from "./images/64970698_mcgOakphILIjw4n4nVkZpUzbTeh5CUQjIZoOQmNvUnw.jpg";
import NavLinks from "./NavLinks";
import UseFooter from "./useFooter";
import "../App.css";
function Contact() {
  return (
    <div>
      <NavLinks />
      <div className="Main">
        <div className="col-lg-6 img-div">
          <img className="myImg" src={Image} alt="" />
        </div>
        <div className="Mid-Div col-lg-6">
          <h2>Contact with us</h2>
          <div className="Form">
            <form action="">
              <label htmlFor="">Name!</label>
              <input type="text" />
              <label htmlFor="">e-mail</label>
              <input type="text" />
              <label htmlFor="">Additonal</label>
              <textarea></textarea>
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <UseFooter />
    </div>
  );
}

export default Contact;
