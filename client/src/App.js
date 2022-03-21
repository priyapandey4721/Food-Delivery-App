import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorHandler/ErrorBoundary";
import Loading from "./media/Loading.gif";
// import Menus from "./components/Menu/Menus";
const Menus = React.lazy(() => import("./components/Menu/Menus"));
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const Register = React.lazy(() => import("./components/Register/Register"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Introduction = React.lazy(() =>
  import("./components/Introduction/Introduction")
);

function App() {
  return (
    // <ErrorBoundary>
    
      <Suspense
        fallback={
          <div className="background">
            <img className="loading" src={Loading} alt="Loading..." />
          </div>
        }
      >
        {/* <Menus/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/menu" element={<Menus />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    // </ErrorBoundary>
  );
}

export default App;
