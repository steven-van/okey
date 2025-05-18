import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProperty from "./Pages/AddProperty";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-property" element={<AddProperty />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
