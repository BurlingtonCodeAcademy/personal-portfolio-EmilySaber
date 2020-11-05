import React from "react";

function Contact() {
  return (
    <div>
      {/* contact page top margin */}
      <div id="contactmargin"></div>
      {/* start page flexbox*/}
      <div id="contentflex">
        <div>
          <p>
            {/* contact image */}
            <img
              id="contactpic"
              alt="Emily Saber Lake Champlain"
              src="/images/contact.jpg"
            />
          </p>
          {/* contact page text */}
          <p>
            <br></br>EMILY SABER <br></br>BOSTON, MA<br></br>
            emilysaber13@gmail.com
          </p>
        </div>
        <div id="contactpara">
          <h2>I'D LOVE TO HEAR FROM YOU!</h2>
          <hr></hr>
          {/* contact form WILL GET THIS WORKING IN VERSION 3.0 :) */}
          <form method="POST" action="/send">
            <input id="text" type="text" placeholder="Name" name="name" />

            <input id="text" type="email" placeholder="Email" name="email" />

            <input id="message" name="message" placeholder="Message" />

            <input value="send" type="submit" />
          </form>
        </div>
      </div>
      {/* contact page bottom margin */}
      <div id="bottomcontactmargin"></div>
    </div>
  );
}

export default Contact;
