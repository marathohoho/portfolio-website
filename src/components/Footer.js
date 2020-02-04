import React from "react";
import "../styles/navbar.scss";
import Social from "./Social";

function Footer() {
  return (
    <div className="footer">
      <div>
        <Social classParam={"mobile-social-icons"} />
      </div>
      <p3>Created by Marat Amanzholov</p3>
      <p1>2020</p1>
    </div>
  );
}

export default Footer;
