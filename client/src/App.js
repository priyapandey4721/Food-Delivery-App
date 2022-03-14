import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorHandler/ErrorBoundary";
import Loading from './Media/Loading.gif'
const Register = React.lazy(() => import ("./components/Register/Register")) ;
const Login = React.lazy(() => import ("./components/Login/Login")) ;
const Introduction = React.lazy(() => import ("./components/Introduction/Introduction")) ;

function App() {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div className="background">
            <img
              className="loading"
              src={Loading}
              alt="Loading..."/>
          </div>
        }
      >
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduction />} /> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
