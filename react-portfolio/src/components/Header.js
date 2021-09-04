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



// function Header(props) {
//     return (
//   <div>
//   <Navbar id="navbar">
//     <Container>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="justify-content-evenly w-100 align-items-center">
//         <Nav.Link href="#About">About</Nav.Link>
//         <Nav.Link href="#Projects">Projects</Nav.Link>
//         <Navbar.Brand href="#home">
//         <img
//           alt=""
//           src={Logo}
//           width="180"
//           height="50"
//           className="d-inline-block align-top"
//         />{' '}
//       </Navbar.Brand>
//         <Nav.Link href="#Resume">Resume</Nav.Link>
//         <Nav.Link href="#Contact">Contact Me</Nav.Link>
        
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>

//   </div>
//     )
// };
// export default Header;  
    

export default function BasicExample() {
  return (
    <Router>
        <div>
    <Navbar id="navbar">
     <Container>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="justify-content-evenly w-100 align-items-center">    
         <Link to="/Projects">Projects</Link>
         <Link to="/About">About</Link>
         {/* Homepage link goes back to home */}
         <Navbar.Brand href="/Home">
         <img alt="" src={Logo} width="250" height="100" className="d-inline-block align-top"/>{' '}</Navbar.Brand>
        <Link to="/Resume">Resume</Link>
        <Link to="/Contactme">Contact Me</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        <Switch>
          <Route exact path="/Home">
            <Main />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
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

// You can think of these components as "pages"
// in your app.

function main() {
  return (
    <div>
      <Main />
    </div>
  );
}

function about() {
  return (
    <div>
      <About />
    </div>
  );
}

function Project() {
  return (
    <div>
      <Project />
    </div>
  );
}

function Resume() {
  return (
    <div>
      <Resume />
    </div>
  );
}