import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import { addToCart } from "../../actions/CartActions";
import { deleteFromCart } from "../../actions/CartActions";
import "./Cart.css";
import Checkout from "../Checkout/Checkout";
function Cart() {
  const dispatch = useDispatch();
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  var subtotal = cartItems.reduce((x, item) => x + item.TotalPrice, 0);
  var grandtotal = subtotal  + 0.05 * subtotal;
  console.log(cartItems);
  return (
    <div className="background">
      <Header />
      <Container>
        <Row>
          <Col md={8}>
            <h1 className="heading">My Cart</h1>
            <hr />
            {cartItems.map((item) => {
              return (
                <div className="d-flex ">
                  <div className="display w-100 ">
                    <h5>{item.Name}</h5>
                    <h5>
                      Price : {item.Quantity} * {item.Price} = {item.TotalPrice}{" "}
                    </h5>
                    <h5>
                      Quantity :{" "}
                      <AiOutlinePlusSquare
                        className="plus"
                        onClick={() => {
                          dispatch(addToCart(item, item.Quantity + 1));
                        }}
                      />{" "}
                      <b>{item.Quantity}</b>{" "}
                      <AiOutlineMinusSquare
                        className="minus"
                        onClick={() => {
                          dispatch(addToCart(item, item.Quantity - 1));
                        }}
                      />
                    </h5>
                    <hr />
                  </div>
                  <div className=" w-100 ">
                    <img
                      className="float-right"
                      src={item.Image}
                      height="100px"
                      width="100px"
                    />
                  </div>
                  <div className=" w-100 float-right">
                    <FaTrashAlt
                      className="trash mt-5 float-right"
                      onClick={() => dispatch(deleteFromCart(item))}
                    />
                  </div>
                </div>
              );
            })}
          </Col>
          <Col md={4} >
            <h1 className="heading">Review Order </h1>
              <hr/>
            <Card className="card">
              <h5 className="display mt-4"> Subtotal : <span className="float-right">{subtotal}/-</span></h5>
              <hr />
              <h5 className="display"> GST% : <span className="float-right">{0.05 * subtotal}/-</span></h5>
              <hr />
              <h5 className="display">
                Grandtotal : <span className="float-right">{subtotal + 0.05 * subtotal}/-</span>
              </h5>
              <hr />
              <Checkout grandtotal={grandtotal}/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
