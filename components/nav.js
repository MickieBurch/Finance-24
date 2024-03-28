import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon
import '../index.css';
import { NavbarBrand } from 'react-bootstrap';

export default function Navigation() {
  return (
    <>
      <Navbar className="nav-bar">
        <NavbarBrand className='navbar-logo'>Rouxe INC.</NavbarBrand>
        <Container>
          <Nav className="nav-title">
            <Nav.Link href="/Home">Home </Nav.Link> {/* Use the correct icon */}
            <Nav.Link href="/SignIn">Demo <FontAwesomeIcon icon={faAngleDown} /></Nav.Link>
            <Nav.Link href="/SignUp">Demo <FontAwesomeIcon icon={faAngleDown} /></Nav.Link>
          </Nav>
        </Container>
        <Container>
          <Nav.Link className="nav-signup" href='/SignUp'>Sign Up</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
