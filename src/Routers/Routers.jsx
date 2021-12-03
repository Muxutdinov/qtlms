import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
// import Login from "../components/Auth/Login";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Login />} /> */}
      </Routes>
    </Router>
  );
};

export default Routers;
