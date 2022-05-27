import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';

export default function MyNav() {
  return (

    <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/"> La Vida Crafts</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link href="contact_us">contact</Nav.Link>
              <Nav.Link eventKey={2} href="gallery">
                gallery
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
       

  )
}
