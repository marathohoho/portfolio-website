import React from "react";
import me from "../static/me.jpg";
import "../App.scss";

function About() {
  return (
    <div className="section">
      <div className="section-content" id="about">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            width: "100%"
          }}
        >
          <h1 style={{ display: "inline-flex" }}> 01. About Me</h1>
          <hr></hr>
        </div>
        <div id="desktop-only">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src={me} alt="me" className="profile-pic" />
          </div>
          <div className="text">
            <p>
              Hello! <br></br> I am Marat, an automation/software engineer from
              Almaty, Kazakhstan.
              <br></br>I am passionate about programming web applications
              (full-stack) and task automation. On spare time I do photography,
              both digital and film.{" "}
            </p>
            <p>
              I graduated from{" "}
              <a
                href="https://illinois.edu"
                style={{ color: "#2fbfba", textDecoration: "underline" }}
              >
                the University of Illinois Urbana-Champaign
              </a>{" "}
              in 2016, majoring in Computer Engineering.
            </p>
            <p>
              {" "}
              These are technologies that I have been working with lately:{" "}
            </p>
            <ul className="text">
              <li>Python</li>
              <li>NGINX</li>
              <li>HTML/CSS/JavaScript</li>
              <li>React/Redux/Hooks</li>
              <li>NodeJS/Express</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
