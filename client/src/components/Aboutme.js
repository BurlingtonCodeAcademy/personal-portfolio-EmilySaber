import React from "react";

function Aboutme() {
  return (
    <div>
      {/* top margin for about page */}
      <p id="aboutmargin">
        {/* about page text */}
        <p id="abouttext">
          <h2>ABOUT</h2> <hr></hr>Welcome! I am Emily Saber. I am currently a
          full time software development student at the Burlington Code Academy
          where I am learning how to be a web developer! Prior to diving into
          the world of programming, I have expereience working in real estate,
          hospitality management, and biological field work.
          <br></br> <br></br>I decided to switch into the world of programming
          to apply my problem solving skills in a new and exicting way. I
          greatly enjoy solving problems and working with others to do so!
          <br></br>
          <br></br>Born and raised in Massachusetts, I have recently moved back
          to the area from Vermont to persue an education remotely and spend
          time with my family. In the future, I aspire to find an employement
          opportunity in the greater Boston area where I can apply my new web
          development skills that I am learning to help others!
          <br></br>
          <br></br>
        </p>
        <p>
          {/* about page images */}
          <img
            id="NEK"
            alt="Emily Saber NEK Photo"
            src="/images/emilysaberabout.jpg"
          />
        </p>
        <p>
          <img
            id="NEK2"
            alt="Emily Saber NEK Photo"
            src="/images/emilysaberabout2.jpg"
          />
        </p>
      </p>
      {/* bottom margin for about page */}
      <p id="aboutbottommargin"></p>
    </div>
  );
}

export default Aboutme;
