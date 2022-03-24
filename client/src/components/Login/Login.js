import React, { useState } from "react";
import Header from "../Header/Header";
import { Card, Form } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { loginUser } from "../../config/Myservices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
toast.configure();
function Login() {
  const success = (data) =>
    toast.success(data, { position: toast.POSITION.TOP_CENTER });
  const failure = (data) =>
    toast.error(data, { position: toast.POSITION.TOP_CENTER });
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const login = (e) => {
    e.preventDefault();
    let data = { email: email, password: password };
    loginUser(data).then((res, err) => {
      if (res.data.err) {
        failure(res.data.err);
        navigate("/login");
        window.location.reload();
      } else {
        success(res.data.msg);
        sessionStorage.setItem("_token", res.data.token);
        sessionStorage.setItem("user", email);
        navigate("/dashboard");
      }
    });
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
              <Form.Group className="mb-3 input-field">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 input-field">
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 input-field">
                <input type="checkbox" onClick={togglePassword} /> Show Password
              </Form.Group>
              <button className="button" type="submit" onClick={login}>
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
