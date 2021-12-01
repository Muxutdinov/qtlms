import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import Courses from '../pages/Courses'

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </Router>
  );
};

export default Routers;
