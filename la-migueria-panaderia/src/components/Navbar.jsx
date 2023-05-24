import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidGet from './CartWidGet';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">La Migueria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contáctenos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Panes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tortas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Otros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidGet />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar