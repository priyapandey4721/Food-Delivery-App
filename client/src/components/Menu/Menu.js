import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAdd } from "../../config/Myservices";
import { Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";
import "./Menu.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../../actions/CartActions";
toast.configure();
function Menu({ item }) {
  const email = sessionStorage.getItem("user");
  const success = (data) =>
    toast.success(data, { position: toast.POSITION.TOP_CENTER });
  const failure = (data) =>
    toast.error(data, { position: toast.POSITION.TOP_CENTER });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Quantity,setQuantity] = useState(1)
  function addCart() {
    dispatch(addToCart(item, Quantity));
  }
  return (
    <>
      <Card className="card">
        <div onClick={handleShow}>
          <Card.Img
            variant="top"
            src={`${item.Image}`}
            className="image"
            alt={"images"}
          />
        </div>
        <Card.Body>
          <Card.Title>{item.Name}</Card.Title>
          <Card.Text>
            <div className="d-flex">
            <div className="w-100">
              <h5>Price  : <br/>Rs. {item.Price}</h5>
            </div>
            <div className="">
              <h5 >Quantity </h5>
              <select value={Quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                {[...Array(10).keys()].map((x, i)=>{
                  return <option value={i+1}>{i+1}</option>
                })}
              </select>
            </div>
            </div>
          </Card.Text>
          <button
            className="button"
            variant="primary"
            onClick={() => {
              addCart();
            }}
          >
            Add <IoAddSharp />
          </button>
        </Card.Body>
      </Card>
      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{item.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            variant="top"
            src={`${item.Image}`}
            className="modal-image"
            alt={"images"}
          />
          <p>{item.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="button" variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Menu;
