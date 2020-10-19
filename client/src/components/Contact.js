import React from 'react';

class Contact extends React.Component {
      render() {
            return (
                  <div>
                        <div id="contactmargin">
                        </div>
                        <div id="contentflex">
                              <div>
                                    <p><img id="contactpic" alt="Emily Saber Lake Champlain" src="/contact.jpg" /></p>
                                    <p><br></br>EMILY SABER <br></br>BOSTON, MA<br></br> emilysaber13@gmail.com</p>
                              </div>
                              <div id="contactpara"><h2>I'D LOVE TO HEAR FROM YOU!</h2>
                                    <hr></hr>
                                    <form>
                                          <ul>
                                                <li> <input id="text" type='text' placeholder="Name" name='name' /></li>
                                                <li><input id="text" type='email' placeholder="Email" name='email' /> </li>
                                                <li> <textarea id="message" name="message" placeholder="Message" /></li>
                                                <li><input id="submit" type='submit' /></li>
                                          </ul>
                                    </form>

                              </div>
                        </div>

                        <div id="bottomcontactmargin"></div>
                  </div>

            )
      }
}

export default Contact;


