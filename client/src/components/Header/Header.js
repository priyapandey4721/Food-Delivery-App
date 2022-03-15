import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { MdAssignment } from "react-icons/md";
import logo from "../../media/logo.png";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="nav-brand">
            <img className="nav-logo" src={logo} />
            &nbsp;<h2>FOODISM</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" bg="light" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="m-auto">
                <Nav.Link href="/dashboard">
                  <span className="nav-text" >Home</span>
                </Nav.Link>
                <Nav.Link href="/menu">
                  <span className="nav-text" > Menu</span>{" "}
                </Nav.Link>
            </Nav>
            {sessionStorage.getItem("_token") == undefined ? (
              <NavDropdown
                title=""
                id="navbarScrollingDropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item href="/login">
                  <b> Sign In </b>
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
            ) : (
              <NavDropdown
                title=""
                id="navbarScrollingDropdown"
                className="nav-dropdown"
              >
                <NavDropdown.Item
                  onClick={(e) => {
                    logout(e);
                  }}
                >
                  <b> Sign Out </b>
                  <span className="nav-item">
                    <FaSignOutAlt />
                  </span>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
