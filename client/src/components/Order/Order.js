import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Row, Col, Container } from "react-bootstrap";
import { getOrder } from "../../config/Myservices";
import moment from "moment";
import "./Order.css";
function Order() {
  let [order, setOrder] = useState([]);
  useEffect(() => {
    getOrder(sessionStorage.getItem("user")).then((res) => {
      if (res.data.user) {
        let data = res.data.user;
        setOrder(data);
      } else {
      }
    });
  }, []);
  return (
    <div className="background">
      <Header />
      {order.map((value, index) => {
        return (
          <p key={index}>
            <Container>
              <div className="order">
                <Row>
                  <ul className="list-unstyled">
                    <tr>
                      <td className="order-time">
                        <li>
                          <h6>ORDER PLACED</h6>
                        </li>
                        <li>
                          <h6>{moment(value.createdAt).calendar()}</h6>
                        </li>
                      </td>
                      <td className="order-time">
                        <li>
                          <h6>TOTAL AMOUNT</h6>
                        </li>
                        <li>
                          <h6>&#8377;{value.orderAmount}</h6>
                        </li>
                      </td>
                      <td className="order-time">
                        <li>
                          <h6>SHIP TO</h6>
                        </li>
                        <li>
                          {value.streetName}, {value.city}, {value.state},<br />{" "}
                          {value.country}
                        </li>
                      </td>
                    </tr>
                  </ul>
                  <hr />
                  <Col style={{ color: "black" }}>
                    <ul className="list-unstyled">
                      {order[index].orderItems.map((val, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <img src={val.Image} className="image" />
                            </td>
                            <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            <tr>
                              {val.Name} , {val.Quantity} * {val.Price}
                            </tr>
                            <tr>Price : {val.TotalPrice}</tr>
                            <hr />
                          </tr>
                        );
                      })}
                    </ul>
                  </Col>
                  <hr />
                </Row>
                <h5 class="date">Order Food Again With Us Thank You !</h5>
              </div>
            </Container>
          </p>
        );
      })}
    </div>
  );
}

export default Order;
