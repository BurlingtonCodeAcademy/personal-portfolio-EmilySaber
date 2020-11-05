//setting up imports for react/link
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //this function is just setting up what our nav bar will look like and where the links will route to respectivaly to bring them inside of our router
  return (
    <div id="nav">
      <div id="nav1">
        <Link to="/">
          <p id="navicon">HOME</p>
        </Link>
      </div>
      <div id="nav2">
        <Link to="/about">
          <p id="navicon">ABOUT</p>
        </Link>
        <Link to="/projects">
          <p id="navicon">PROJECTS</p>
        </Link>
        <Link to="/work">
          <p id="navicon">WORK</p>
        </Link>
        <Link to="/interests">
          <p id="navicon">INTERESTS</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
