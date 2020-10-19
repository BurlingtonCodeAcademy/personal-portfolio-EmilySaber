import Navbar from "./components/Navbar"
import Aboutme from "./components/Aboutme"
import Home from "./components/Home"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Interest from "./components/Interest"
import Footer from "./components/Footer"
import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      page: "home",

    }
  }

  contentHandler = (event) => {
    this.setState({
      page: event.target.id,
    })
  }

  render() {

    document.title= this.state.page

    return (
      <div>
        <Navbar contentHandler={this.contentHandler} />
        {this.state.page === "about" ? <Aboutme /> : null}
        {this.state.page === "home" ? <Home /> : null}
        {this.state.page === "work" ? <Work /> : null}
        {this.state.page === "contact" ? <Contact /> : null}
        {this.state.page === "projects" ? <Project /> : null}
        {this.state.page === "interests" ? <Interest /> : null}
        <Footer contentHandler={this.contentHandler}/>
       
      </div>
    );

  }
}

export default App;
