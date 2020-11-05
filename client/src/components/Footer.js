import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  //this function is just setting up what our footer bar will look like and where the links will route to respectivaly to bring them inside of our router
  return (
    <div id="footerborder">
      <div id="footer1">
        <p id="copy"> &#169; COPYRIGHT EMILY SABER</p>
      </div>
      <div id="nav2">
        <Link to="/contact">
          <p id="contact">CONTACT</p>
        </Link>
        <a
          id="linked"
          target="_blank"
          href="https://www.linkedin.com/in/emily-saber-aa5a07198/"
        >
          LINKED IN
        </a>
      </div>
    </div>
  );
}

export default Footer;
