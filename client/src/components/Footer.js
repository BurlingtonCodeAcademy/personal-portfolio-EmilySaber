import React from 'react';

function Footer (props) {
   
      return ( 
            <div id="footerborder">
            
                        
                              <div id="footer1">
                                    
                              <p id="copy"> 	&#169; COPYRIGHT EMILY SABER</p>
                              </div>
                              <div id="nav2">
                              <p id="contact" onClick={props.contentHandler}>CONTACT </p>
                              <a id="linked" target="_blank" href="https://www.linkedin.com/in/emily-saber-aa5a07198/"> LINKED IN</a>
                              
                              
                              </div>
                      


                
            </div>

       ) }

export default Footer;

