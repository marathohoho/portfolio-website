import React, { useRef } from "react";
import icon from "../icon.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styles/navbar.scss";
import Social from "./Social";

export default function Navbar() {
  const navLinks = useRef(null);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const test = () => {
    document.getElementById("side-bar-input").click();
  };

  const animateLinks = () => {
    const childrenObj = navLinks.current.children;
    const inputChecker = document.getElementById("side-bar-input");
    if (window.innerWidth < 511) {
      if (inputChecker.checked === true) {
        navLinks.current.style.transform = "scale(1, 1)";
      } else {
        navLinks.current.style.transform = "translate(100%, 0%)";
      }
    } else {
      navLinks.current.style.transform = "";
    }

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
      <nav className="nav-content" id="navbar">
        <div className="nav-logo">
          <img src={icon} alt="Logo" onClick={() => scrollToTop()} />
        </div>
        <div>
          <div className="hamburger-menu" id="hamburger-menu">
            <input type="checkbox" id="side-bar-input" onClick={animateLinks} />

            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="nav-items" id="nav-items">
            <ul id="side-bar" ref={navLinks}>
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
        </div>
      </nav>
      <Social classParam={"desktop-social-icons"} />
    </div>
  );
}
