import React from "react";
import Header from "../Header/Header";
import {useNavigate} from 'react-router'
import { Card,CardGroup, Row, Col } from "react-bootstrap";
import dashboard1 from "../../media/dashboardbg.jpg";
import dashboard2 from "../../media/dashboard2.jpg";
import dashboard3 from "../../media/dashboard3.jpg";
import dashboard4 from "../../media/dashboard4.jpg";
import "./Dashboard.css";
function Dashboard() {
    const navigate = useNavigate();
    const navigatemenu=()=>{
        navigate("/menu")
    }
  return (
    <div className="background">
      <Header />
      <div className="bg-text">
        <h1 className="heading">FOODISM</h1>
        <p>Discover the best food near you! </p>
      </div>
      <CardGroup className="card-group">
        <Card className="card">
          <Card.Img className="image" variant="top" src={dashboard1} onClick={navigatemenu} />
          <Card.Body>
            <Card.Title>Best Food</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">welcome to @foodism</small>
          </Card.Footer>
        </Card>
        <Card className="card">
          <Card.Img className="image" variant="top" src={dashboard2} onClick={navigatemenu} />
          <Card.Body>
            <Card.Title>Hygiene</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">welcome to @foodism</small>
          </Card.Footer>
        </Card>
        <Card className="card">
          <Card.Img className="image" variant="top" src={dashboard3} onClick={navigatemenu} />
          <Card.Body>
            <Card.Title>Your Favorites</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">welcome to @foodism</small>
          </Card.Footer>
        </Card>
        <Card className="card">
          <Card.Img className="image" variant="top" src={dashboard4} onClick={navigatemenu} />
          <Card.Body>
            <Card.Title>Order Food Online</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">welcome to @foodism</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <h1>Your Previous Orders </h1>
    </div>
  );
}

export default Dashboard;
