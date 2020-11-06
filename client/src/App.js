//bring in all component we will need to render to the page!!
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

//react imports/ rounter
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

//Took out class to create state and am now going to render components functionally with React Router
function App() {
  return (
    <Router>
      {/* header with links */}
      {/* // this is going to set up our links to render our various components to the page I.E click on about bring up the about me page */}
      <Navbar />
      {/* creates a working path history! Woo. Link to exact component names that are imported above!!  */}
      <Switch>
        {/* what component will present on the page! */}
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/about">
          <Aboutme />
        </Route>
        <Route exact={true} path="/projects">
          <Project />
        </Route>
        <Route exact={true} path="/interests">
          <Interest />
        </Route>
        <Route exact={true} path="/work">
          <Work />
        </Route>
        <Route exact={true} path="/contact">
          <Contact />
        </Route>
      </Switch>
      {/* footer with link to render contact page or linkedin */}
      <Footer />
    </Router>
  );
}

export default App;
