import React, { useState } from "react";
import Header from "../Header/Header";
import { Card, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { registerUser } from "../../config/Myservices";
import { useNavigate } from "react-router";
import "./Register.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Register() {
  const success = (data) => toast.success(data, { position: toast.POSITION.TOP_CENTER });
  const failure = (data) => toast.error(data, { position: toast.POSITION.TOP_CENTER });
  const navigate = useNavigate();
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [profile, setProfile] = useState("");
  const registration = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("profile", profile);
    registerUser(formdata).then((res, err) => {
      if (res.data.err) {
        failure(res.data.err);
      } else {
        alert(res.data.msg);
        success("/login");
      }
    });
  };
  return (
    <div className="background">
      <Header />
      <Card className="register-card">
        <Card.Body>
          <Card.Title className="register-title">
            <FaUserCircle className="user" /> <br />
            Register{" "}
          </Card.Title>
          <hr />
          <Card.Text>
            <Form>
              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicEmail"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  name="firstname"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicEmail"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastname"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicEmail"
              >
                <Form.Label>Profile</Form.Label>
                <Form.Control
                  type="file"
                  name="profile"
                  onChange={(e) => {
                    setProfile(e.target.files[0]);
                  }}
                />
              </Form.Group>
              <button className="button" type="submit" onClick={registration}>
                Register <span>{">>>"}</span>
              </button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Register;
