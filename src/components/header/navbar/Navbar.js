import React from 'react'
import {Navbar,Offcanvas,Container,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import './Navbar.css';
const Header1 = () => {
  const expand="lg"
  return (
    <section className='navbar0'>
      <Navbar sticky="top" bg="white" expand={expand} className="mb-3" >
    <Container fluid>
    
      {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="start"
        sticky="top"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='Offcanvas-Body' >
          <Nav className="justify-content-start flex-grow-1">
            <Nav.Link href="#action1" className='Nav-Link Nav-Link-Home' >HOME</Nav.Link>
            <Nav.Link href="#action2" className='Nav-Link Nav-Link-Pages' >PAGES</Nav.Link>
            <Nav.Link href="#action3" className='Nav-Link Nav-Link-Blog' >BLOG</Nav.Link>
            <Nav.Link href="#action4" className='Nav-Link Nav-Link-Gallery' >GALLERY</Nav.Link>
            <Nav.Link href="#action5" className='Nav-Link Nav-Link-Elements' >ELEMENTS</Nav.Link>
            <Nav.Link href="#action6" className='Nav-Link Nav-Link-Shop' style={{paddingRight:"30px !important"}}>SHOP</Nav.Link>
          </Nav>
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link href="#action5"><BsSearch className="searchIcon"/></Nav.Link>
            <Nav.Link href="#action6"><AiOutlineShoppingCart className="cartIcon"/></Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  </section>
  )
}
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

export default Header1