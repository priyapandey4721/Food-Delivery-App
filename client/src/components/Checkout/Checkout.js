import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import Cards from "react-credit-cards";
import { useNavigate } from "react-router";
import { placeOrders } from "../../config/Myservices";
import "react-credit-cards/es/styles-compiled.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Checkout({ grandtotal }) {
  const success = (data) =>
    toast.success(data, { position: toast.POSITION.TOP_CENTER });
  const failure = (data) =>
    toast.error(data, { position: toast.POSITION.TOP_CENTER });
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [expiry, setExpiry] = useState("");
  const [show, setShow] = useState(false);
  const [showadd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [streetname, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [cartitems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // function tokenHandler(token) {
  //   console.log(token);
  //   dispatch(placeOrder(token, grandtotal));
  // }
  const email = sessionStorage.getItem("user");
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    setCartItems(cartItems);
  }, []);

  const cardvalidation = () => {
    if (name == "" || cvc == "" || expiry == "" || number == "") {
      setShowAdd(false);
      failure("All Details are Required");
    } else {
      setShowAdd(true);
      success("Payment Done");
      setShow(false);
    }
  };
  const placeOrder = (e) => {
    e.preventDefault();
    let data = {
      email: email,
      orderItems: cartitems,
      orderAmount: grandtotal,
      streetName: streetname,
      city: city,
      state: state,
      country: country,
    };
    placeOrders(data)
    .then((res,err)=>{
      if(res.data.err){
        failure(res.data.err);
      }else{
        localStorage.removeItem("cartItems")
        success(res.data.msg);
        navigate("/order")
      }
    })
  };
  return (
    <div>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Check Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
          <hr />
          <Form style={{ padding: 8 }}>
            <Form.Group>
              <Form.Control
                className=" inp"
                type="number"
                value={number}
                placeholder="Enter Credit Card Number"
                name="number"
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
                onFocus={(e) => setFocus(e.target.name)}
              ></Form.Control>
              {number.length > 16 && (
                <span className="text-danger">
                  Enter Credit Card Number Properly
                </span>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="inp"
                type="text"
                value={name}
                placeholder="Enter Name"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onFocus={(e) => setFocus(e.target.name)}
              ></Form.Control>
              {name != "" && name.length < 4 && (
                <span className="text-danger">Enter Name correctly</span>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                className=" inp"
                type="text"
                placeholder="MM/YY Expiry"
                value={expiry}
                name="expiry"
                onChange={(e) => {
                  setExpiry(e.target.value);
                }}
                onFocus={(e) => setFocus(e.target.name)}
              ></Form.Control>
              {expiry != "" && expiry.length > 4 && (
                <span className="text-danger">Enter Expiry Date correctly</span>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                className=" inp"
                type="number"
                placeholder="CVC"
                value={cvc}
                name="cvc"
                onChange={(e) => {
                  setCvc(e.target.value);
                }}
                onFocus={(e) => setFocus(e.target.name)}
              ></Form.Control>
              {cvc != "" && cvc.length > 3 && (
                <span className="text-danger">Enter CVV correctly</span>
              )}
            </Form.Group>
            <br />
            <Button
              variant="primary"
              className="button"
              onClick={cardvalidation}
            >
              Pay {grandtotal}
            </Button>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="button" variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      {/* Address */}
      <Modal show={showadd}>
        <Modal.Header closeButton onClick={handleCloseAdd}>
          <Modal.Title>Add Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <hr />
          <Form style={{ padding: 8 }}>
            <Form.Group>
              <Form.Control
                className=" inp"
                type="text"
                placeholder="Enter Street Name"
                name="streetname"
                onChange={(e) => {
                  setStreetName(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="inp"
                type="text"
                placeholder="Enter City"
                name="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                className=" inp"
                type="text"
                placeholder="Enter State"
                name="state"
                onChange={(e) => {
                  setState(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                className=" inp"
                type="text"
                placeholder="Enter Country"
                name="country"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              ></Form.Control>
            </Form.Group>
            <br />
            <Button variant="primary" className="button" onClick={placeOrder}>
              Add Address
            </Button>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="button"
            variant="secondary"
            onClick={handleCloseAdd}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <div onClick={handleShow}>
        <button className="button">Pay Now</button>
      </div>
    </div>
  );
}

export default Checkout;
