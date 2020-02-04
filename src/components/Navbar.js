import React, { useRef } from "react";
import icon from "../icon.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/navbar.scss";
import Social from "./Social";

export default function Navbar() {
  const navLinks = useRef(null);
  const scrollToTop = () => {
    console.log("pressed");
    scroll.scrollToTop();
  };
  const test = () => {
    document.getElementById("side-bar-input").click();
  };
  const animateLinks = () => {
    const childrenObj = navLinks.current.children;
    console.log(childrenObj);
    for (let i = 0; i < childrenObj.length; i++) {
      if (childrenObj[i].style.animation) {
        childrenObj[i].style.animation = "";
      } else {
        childrenObj[i].style.animation = `navlinkFade 0.5s ease forwards ${i *
          0.05 +
          0.075}s`;
      }
    }
  };

  return (
    <div>
      <nav className="nav" id="navbar">
        <div className="nav-content" id="nav-content">
          <input type="checkbox" id="side-bar-input" onClick={animateLinks} />

          <span></span>
          <span></span>
          <span></span>

          {/* <div>
            <img
              src={icon}
              alt="Logo"
              className="nav-logo"
              onClick={() => scrollToTop()}
            />
          </div> */}

          <ul className="nav-items" id="nav-items" ref={navLinks}>
            <li className="nav-item">
              <Link
                onClick={test}
                className="ancher-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                01. About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={test}
                className="ancher-link"
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                02. Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={test}
                className="ancher-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                03. Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={test}
                className="ancher-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                04. Contact
              </Link>
            </li>
            <li>
              <a
                href="https://amanzholov.com/resume.pdf"
                onClick={test}
                className="resume-button"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Social classParam={"desktop-social-icons"} />
    </div>
  );
}
