import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from "../images/logo.png";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Main from './Main/index';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
// import Error404 from './404';   

export default function Header() {
  return (
    <Router>
        <div>
    <Navbar id="navbar">
     <Container>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="justify-content-evenly w-100 align-items-center">    
         <Link to="/react-portfolio/Projects">Projects</Link>
         <Link to="/About">About</Link>
         {/* Homepage logo goes back to home */}
         <Navbar.Brand href="/">
         <img alt="" src={Logo} width="250" height="100" className="d-inline-block align-top"/>{''}</Navbar.Brand>
         <Link to="/Resume">Resume</Link>
        <Link to="/Contactme">Contact Me</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/react-portfolio/">
            <Main />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/react-portfolio/Projects">
            <Projects />
          </Route>
          <Route path="/Resume">
            <Resume />
          </Route>
          <Route path="/Contactme">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function main() {
//   return (
//     <div>
//       <Main />
//     </div>
//   );
// }

// function about() {
//   return (
//     <div>
//       <About />
//     </div>
//   );
// }

// function Project() {
//   return (
//     <div>
//       <Project />
//     </div>
//   );
// }

