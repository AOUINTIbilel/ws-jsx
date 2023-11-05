import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ParNavBar() {
  return (
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LIVE Stream chanel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://www.youtube.com/live/BKXyGQtyECo?si=U1VP9s1t8Axa1T9p"> DW ARABIA</Nav.Link>
            <Nav.Link href="https://www.youtube.com/live/VuYzy8IuT0Y?si=DdQFkm3BVbDNfw9j">FRANCE 24 ARABIA</Nav.Link>
            <Nav.Link href="https://www.youtube.com/live/vDAZVdMYBDw?si=O3NdthaQgX_olqDc">ALHURRA TV</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
  );
}

export default ParNavBar;