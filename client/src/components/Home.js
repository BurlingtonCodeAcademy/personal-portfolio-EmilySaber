import React from "react";

function Home() {
  return (
    <div>
      {/* spacing in between header and home content */}
      <div id="homemargintop"></div>
      {/* start flex box for page content */}
      <div id="homeflex">
        <p>
          {/* home page images */}
          <img
            id="emilysaber1"
            alt="Photo of Emily Saber"
            src="/images/600.jpg"
          />
        </p>
        <p>
          <img
            id="emilysaber1"
            alt="Photo of Emily Saber"
            src="/images/100.jpg"
          />
        </p>
        <p>
          <img
            id="emilysaber"
            alt="Photo of Emily Saber"
            src="/images/Picture50.jpg"
          />
        </p>
        <p id="homepara">
          <h1 id="homeheader">
            {/* home page text */}
            HELLO! I'M EMILY SABER,
            <hr />
          </h1>
          <p>
            I am Currently a Software Development Student
            <br></br>
            Future Jr. Web Developer
            <br></br>
            Outdoor Enthusiast
            <br></br>
            Located in Boston, MA
          </p>
        </p>
      </div>
      {/* bottom margin */}
      <p id="bottomhomemargin"></p>
    </div>
  );
}

export default Home;
