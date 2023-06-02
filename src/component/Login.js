import React, { useEffect, useState } from "react";
import logo from "../Image/Logo.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("isLogedin"));
    if (user) {
      navigate("/product");
    }
  }, []);

  function productnav() {
    if (email === "anoop1@gmail.com" && password === "1234") {
      const dummy = { email };
      localStorage.setItem("isLogedin", true);
      navigate("/Product");
    } else {
      console.log("Chechk your Details");
    }
  }

  return (
    <div className="signup">
      <img src={logo} className="signuplogo" />
      <div className="Topg">
        <div className="top">
          <h2>Login </h2>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="E-mail"
          />
          <br />

          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="form-control"
            placeholder="Password"
          />
          <br />

          <button onClick={productnav} className="loginbtn2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
