import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'
import { NavbarBrand } from 'react-bootstrap';


export default function Navigation() {
  return (
    <>
      <Navbar className="nav-bar">
      <NavbarBrand className='navbar-logo'>Logo here</NavbarBrand>
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

