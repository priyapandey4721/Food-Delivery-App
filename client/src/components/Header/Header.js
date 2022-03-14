import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { FaSignInAlt } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import logo from "../../Media/logo.png";
import "./Header.css";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard" className="nav-brand">
            <img className="nav-logo" src={logo} />
            &nbsp;<h2>FOODISM</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="m-auto">
              <LinkContainer to="/dashboard">
                <Nav.Link>
                  <span className="nav-text">Home</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/menu">
                <Nav.Link>
                  <span className="nav-text"> Menu</span>{" "}
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <NavDropdown
              title=""
              id="navbarScrollingDropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="/login">
                <b> Login </b>
                <span className="nav-item">
                  <FaSignInAlt />
                </span>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">
                <b>Register </b>
                <span className="nav-item">
                  <MdAssignment />
                </span>
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
