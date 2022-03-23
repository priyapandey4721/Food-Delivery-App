import React,{useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaSignInAlt, FaSignOutAlt,FaBorderNone } from "react-icons/fa";
import { getProfile } from "../../config/Myservices";
import { MdAssignment } from "react-icons/md";
import {BsFillCartPlusFill} from 'react-icons/bs'
import logo from "../../media/logo.png";
import "./Header.css";
function Header() {
  const navigate = useNavigate();
  let [user, setUser] = useState([]);
  const cartstate = useSelector(state=>state.cartReducer)
    useEffect(()=>{
        getProfile(sessionStorage.getItem('user'))
        .then(res=>{
            if(res.data.user){
                setUser(res.data.user);
            }
        })
    },[])
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
            <Nav.Link href="/cart">
                  <span className="nav-cart" >Cart {cartstate.cartItems.length} <BsFillCartPlusFill/> </span>{" "}
                </Nav.Link>
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
                title={user.firstname}
                className="nav-dropdown"
              >
                <NavDropdown.Item href="/order">
                  <b> My Orders </b>
                  <span className="nav-item">
                    <FaBorderNone />
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Divider />
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
