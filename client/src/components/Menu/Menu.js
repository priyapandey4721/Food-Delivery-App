import React, { useState, useEffect } from "react";
import { getMenu, cartAdd } from "../../config/Myservices";
import { Card, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {IoAddSharp} from 'react-icons/io5'
import "./Menu.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/Header";
toast.configure();
function Menu() {
    const email = sessionStorage.getItem("user")
  const success = (data) =>
    toast.success(data, { position: toast.POSITION.TOP_CENTER });
  const failure = (data) =>
    toast.error(data, { position: toast.POSITION.TOP_CENTER });
  let [menus, setMenus] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("user") === undefined) {
      failure("Login is Required");
      navigate("/login");
    }
    if (sessionStorage.getItem("_token") != undefined) {
      getMenu().then((res) => {
        if (res.data.err) {
          failure(res.data.err);
        } else {
          setMenus(res.data.products);
          success(res.data.msg);
        }
      });
    }
  }, []);
  const addCart = (item) =>{
    //   window.location.reload();
      cartAdd(item,email)
      .then(res=>{
          success(res.data.msg)
      })
  }
  return (
    <div className="background">
        <Header/>
      <Container>
        <Container align="center">
          <h2>Menu</h2>
        </Container>
        <div className="row p-4" style={{ marginLeft: "60px" }}>
          {menus.map((item) => (
            <Col lg={3} key={item._id}>
              <Card  className="card">
                <Card.Img
                  variant="top"
                  src={`${item.Image}`}
                  className="image"
                  alt={"images"}
                />
                <Card.Body>
                  <Card.Title>{item.Name}</Card.Title>
                  <Card.Text><h5>Rs. {item.Price}</h5></Card.Text>
                  <button className="button" variant="primary" onClick={()=>{addCart(item)}}>Add <IoAddSharp/></button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Menu;
