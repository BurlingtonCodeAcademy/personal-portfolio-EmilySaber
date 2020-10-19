import React from 'react';

function Navbar (props) {
     
            return (
                  <div id="countainer">
                        <div id="nav">
                              <div id="nav1">
                              <p id="home" onClick={props.contentHandler}>HOME </p>
                              </div>
                              <div id="nav2">
                              <p id="about" onClick={props.contentHandler}>ABOUT </p>
                              <p id="projects" onClick={props.contentHandler}>PROJECTS </p>
                              <p id="interests" onClick={props.contentHandler}>INTERESTS </p>
                              <p id="work" onClick={props.contentHandler}>WORK HISTORY </p>
                              
                              </div>
                        </div>


                  </div>

            )
      }


export default Navbar;
