import React from "react";
import { findByLabelText } from "@testing-library/react";

function Social({ classParam }) {
  return (
    <div className={classParam}>
      <ul>
        <li>
          <div className="test">
            <a href={`mailto:codmarat@gmail.ccom`}>
              {classParam === "mobile-social-icons" ? "" : "Email me"}
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </li>
        <li>
          <a href="https://github.com/marathohoho">
            {classParam === "mobile-social-icons" ? "" : "Github"}
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marat-amanzholov-00228043/">
            {classParam === "mobile-social-icons" ? "" : "LinkedIn"}
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/marat.amanzholov.5">
            {classParam === "mobile-social-icons" ? "" : "Facebook"}
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/marat_amanzholov">
            {classParam === "mobile-social-icons" ? "" : "Instagram"}
            <i className="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
