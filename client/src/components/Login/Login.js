import React, { useState } from "react";
import Header from "../Header/Header";
import { Card, Button, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "./Login.css";
function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="background">
      <Header />
      <Card className="login-card">
        <Card.Body>
          <Card.Title className="login-title">
            <FaUserCircle className="user" /> <br />
            Sign In{" "}
          </Card.Title>
          <hr />
          <Card.Text>
            <Form>
              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicPassword"
              >
                <input type="checkbox" onClick={togglePassword} /> Show Password
              </Form.Group>
              {/* <Form.Group className="mb-3 input-field" controlId="formBasicPassword">
              <a href="/forgotpassword" className="href-link">Forgot Password? </a>
              </Form.Group> */}
              <button className="button" type="submit">
                Sign In <span>{">>>"}</span>
              </button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
