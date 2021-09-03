import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from "../../images/white Lauren Norgard owl.png"

function Header() {
    return (
  <div>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-evenly w-100 align-items-center">
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="180"
          height="50"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
        <Nav.Link href="#Resume">Resume</Nav.Link>
        <Nav.Link href="#Contact">Contact Me</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  </div>
    )
};
export default Header;  
    

