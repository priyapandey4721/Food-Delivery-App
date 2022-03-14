import React from 'react'
import Header from '../Header/Header'
import { Card, Button, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "./Register.css"
function Register() {
  return (
    <div className='background'>
        <Header/>
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
                <Form.Control type="text" placeholder="Enter First Name" />
              </Form.Group>
              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicEmail"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </Form.Group>
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
                  type= "password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 input-field"
                controlId="formBasicEmail"
              >
               <Form.Label>Profile</Form.Label>
                <Form.Control
                  type= "file"
                />
              </Form.Group>
              {/* <Form.Group className="mb-3 input-field" controlId="formBasicPassword">
              <a href="/forgotpassword" className="href-link">Forgot Password? </a>
              </Form.Group> */}
              <button className="button" type="submit">
                Register <span>{">>>"}</span>
              </button>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Register