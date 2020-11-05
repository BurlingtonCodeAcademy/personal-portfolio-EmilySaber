import React from "react";

function Interests() {
  return (
    <div>
      {/* set top margin for interest page */}
      <p id="interestmargin"></p>
      {/* start flexbox for page content */}
      <div id="interestflex">
        <p>
          {/* interest page images */}
          <img id="interest" alt="NEK" src="/images/interest1.jpg" />
          <img id="interest" alt="NEK" src="/images/interest2.jpg" />
        </p>
        <p></p>
        <p id="interestpara">
          {/* interest page text */}
          <h2>In My Free Time... </h2>
          <hr></hr>You can typically catch me with a board in my hand for all
          seasons, paddleboard, snowboard or skateboard. I enjoy connecting with
          nature and spending most of my free time outside. <br></br>
          <br></br>I love to spend time with my family, friends and cat Layla
          <br></br>
          <br></br>Amature ukelele player, working on that one
        </p>
      </div>
      {/* set bottom margin for interest page */}
      <p id="interesttopmargin"></p>
    </div>
  );
}

export default Interests;
