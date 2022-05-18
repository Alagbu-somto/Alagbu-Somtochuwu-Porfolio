import React, { useState } from "react";
import navImage from "../images/high-tech-technology.png";

function NavBar() {
  const [dropdownStat, setDropdownStat] = useState(false);

  return (
    <div className="nav-bar">
      <img src={navImage} alt="logo" width="80" heigth="80" />
      <div className="left">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Me</a>
      </div>
      <div class="dropdown">
        <button class="dropbtn" onClick={() => setDropdownStat(!dropdownStat)}>
          <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <div
          class="dropdown-content"
          style={{ display: dropdownStat && "block" }}
        >
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
