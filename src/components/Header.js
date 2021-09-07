import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from "../images/logo.png";
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import Main from './Main/index';
// import Projects from './Projects/Projects';
// import About from './About/About';
// import Contact from './Contact/Contact';
// import Resume from './Resume/Resume';
 

export default function Header({currentPage, handlePageChange}) {
  return (
    // <Router>
        <div>
    <Navbar id="navbar">
     <Container>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="justify-content-evenly w-100 align-items-center">    
        <Nav.Link href="#Projects"onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
        <Nav.Link href="#About" onClick={() => handlePageChange('About')}>About</Nav.Link>
         <Nav.Link href="#Main" onClick={() => handlePageChange('Main')}><img alt="logo" src={Logo} width="250" height="100" className="d-inline-block align-top"/></Nav.Link>
         <Nav.Link href="#Resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
        <Nav.Link href="#Contact" onClick={() => handlePageChange('Contact')}>Contact Me</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        {/* <Switch>
          <Route exact path="/react-portfolio/">
            <Main />
          </Route>
          <Route path="/react-portfolio/About">
            <About />
          </Route>
          <Route path="/react-portfolio/Projects">
            <Projects />
          </Route>
          <Route path="/react-portfolio/Resume">
            <Resume />
          </Route>
          <Route path="/react-portfolio/Contactme">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router> */}
    </div>
  );
}