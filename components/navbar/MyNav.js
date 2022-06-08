import Image from 'next/image';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default function MyNav() {
  return (
    <Navbar bg="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="/"> 
          <Image
              src="/lvclogo.png"
              alt="la vida crafts logo"
              width={90}
              height={90}
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto">
            </Nav>

            <Nav>
              <NavDropdown title="Services">
                <Nav.Link href="https://drive.google.com/file/d/13BOi9Qio9JZAVMv0a3QTbvEZHZUwrcr6/view" target='_blank'>Garlands</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1mzBogDPR85zT0YbmBkIEiNIq9-QC7QMO/view" target='_blank'>Ballon Bouquets</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1LJceLOplAu9A-PprRhG8dRl5uICEOSgA/view" target='_blank'>Party Favors</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/12gfataZMdW-mdGeC0yOkrPzWdLeBL8bJ/view" target='_blank'>Flowers</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1ElCZO_czoitQ6K8GQGKLHDeScf8Scfic/view" target='_blank'>Shirts</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1GVPxs69_bso7F77jxNBvWoK2uWDvd1nY/view" target='_blank'>Crafts</Nav.Link>
              </NavDropdown>
              <Nav.Link eventKey={2} href="gallery">Gallery</Nav.Link>
              <Nav.Link href="contact_us">Contact</Nav.Link>
            </Nav>

          </Navbar.Collapse>
      </Container>
    </Navbar>
       

  )
}