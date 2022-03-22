import React, { useEffect } from "react";
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col } from "react-bootstrap";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Menu.css";
import "react-toastify/dist/ReactToastify.css";
import { getAllMenus } from "../../actions/MenuActions";
toast.configure();
function Menus() {
  const failure = (data) =>
    toast.error(data, { position: toast.POSITION.TOP_CENTER });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menustate = useSelector((state) => state.getAllMenusReducer);
  const { menus, error, loading } = menustate;
  useEffect(() => {
    if (sessionStorage.getItem("user") === undefined) {
      failure("Login is Required");
      navigate("/login");
    }
    dispatch(getAllMenus());
  }, []);
  return (
    <div className="background">
      <Header />
      <Container align="center">
        <h2>Menu</h2>
      </Container>
      <Container>
        <div className="row p-4 justify-content-center">
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Something Went Wrong</h1>
          ) : (
            menus.map((item) => {
              return (
                <Col lg={3} key={item._id}>
                  <Menu item={item} />
                </Col>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
}

export default Menus;
