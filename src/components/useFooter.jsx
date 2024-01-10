import React from "react";
import "../App.css";
import linkedin from "./images/indir (1).png";
import Insta from "./images/indir.jpg";
import Face from "./images/indir.png";
import { Link } from "react-router-dom";
function useFooter() {
  return (
    <div>
      <div className="Social-links">
        <Link to="https://www.linkedin.com" target="blank">
          <img src={linkedin} alt="" />
        </Link>
        <Link to="https://www.instagram.com/" target="blank">
          <img src={Insta} alt="" />
        </Link>
        <Link to="https://www.facebook.com" target="blank">
          <img src={Face} alt="" />
        </Link>{" "}
        <p style={{ color: "white" }}>Tüm Hakları saklıdır 2024</p>
      </div>
    </div>
  );
}

export default useFooter;
