import React, { useState } from "react";
import logo from "../Image/Logo.svg";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");

  function Signup() {
    navigate("/login");
  }
  return (
    <div className="signup">
      <img src={logo} className="signuplogo" />
      <div className="Topg">
        <div className="top">
          <h2>Sign Up Now </h2>
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="FullName"
          />
          <br />
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="E-mail"
          />
          <br />
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
          />
          <br />
          <input
            type="tel"
            pattern="[0-9]{10}"
            value={Phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            className="form-control"
            placeholder="MobileNo"
          />
          <br />
          <button className="signupbtn">signup</button>
          <p>
            Already account Please Login{" "}
            <button onClick={Signup} className="loginbtn">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
