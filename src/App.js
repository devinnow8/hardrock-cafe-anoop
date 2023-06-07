import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout";
import Register from "./component/Signup";
import "./App.css";
import Login from "./component/Login";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Changepasword from "./component/Changepasword";
import Forgetpasword from "./component/Forgetpasword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Signup" element={<Register />} />
          <Route exact path="/product" element={<Layout />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Changepasword" element={<Changepasword />} />
          <Route exact path="/Forgetpasword" element={<Forgetpasword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
