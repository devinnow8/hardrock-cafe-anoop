import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Register from "./component/Signup";
import "./App.css";
import Login from "./component/Login";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  // const navigate = useNavigate();
  // const [name, setname] = useState("");
  // useEffect(() => {
  //   if (!localStorage.getItem("userData")) navigate("/signin");
  // }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Signup" element={<Register />} />
          <Route exact path="/product" element={<Layout />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
