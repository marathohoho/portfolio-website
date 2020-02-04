import React from "react";
import "../App.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Intro() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <div className="intro">
        <div style={{ width: "30px" }}>{""}</div>
        <div style={{ width: "100%" }}>
          <h1 className="name">
            {" "}
            Hi! My name is <h2>Marat Amanzholov</h2>{" "}
          </h1>
        </div>
        <p>I am a full-stack web developer </p>
      </div>

      <div className="arrow-container">
        <Link
          className="ancher-link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <svg id="more-arrows">
            <polygon
              class="arrow-top"
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            />
            <polygon
              class="arrow-middle"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              class="arrow-bottom"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
