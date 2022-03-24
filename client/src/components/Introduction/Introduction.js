import React from "react";
import { Card } from "react-bootstrap";
import "./Introduction.css";
import logo from "../../media/logo.png";
import { useNavigate } from "react-router";
function Introduction() {
  const navigate = useNavigate();
  const navigatetologin = () => {
    navigate("/login");
  };
  return (
    <div >
      <Card className="card">
        <img className="card-image" variant="top" src={logo} />
        <Card.Body>
          <Card.Title>
            <span className="card-title">Food Delivery App</span>
          </Card.Title>
          <Card.Text className="card-text">
            Welcome to Food delivery services.
            <br />
            We are keeping our Deliveries Clean, Safe, and Contactless. For you
            <p>
              We're performing delivery free of charge in case if your order is
              higher than 200Rs.
            </p>
          </Card.Text>
          <button className="button" onClick={navigatetologin}>
            Order Now! <span>{">>>"}</span>
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Introduction;
