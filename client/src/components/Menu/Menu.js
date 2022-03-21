import React, { useState } from "react";
import { cartAdd } from "../../config/Myservices";
import { Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";
import "./Menu.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const navigate = useNavigate();
  const addCart = (item) => {
    //   window.location.reload();
    cartAdd(item, email).then((res) => {
      success(res.data.msg);
    });
  };
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
            <h5>Rs. {item.Price}</h5>
          </Card.Text>
          <button
            className="button"
            variant="primary"
            onClick={() => {
              addCart(item);
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
