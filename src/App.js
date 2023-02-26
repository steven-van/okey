import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProperty from "./pages/AddProperty";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add-property" element={<AddProperty />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
