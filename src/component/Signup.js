import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../Image/Logo.svg";
import { useNavigate } from "react-router-dom";
import BaseApi from "../Api/BaseAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userData"));

    if (user !== null) {
      navigate("/Product");
    }
  }, []);
  const forloginuppage = () => {
    navigate("/");
  };
  const registerAction = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let payload = {
      username: Username,
      email: Email,
      password: Password,
      phone_number: Phonenumber,
    };
    let result = await BaseApi.post("signup/", payload);

    if (result) {
      let loginpayload = {
        email: Email,
        password: Password,
      };
      let loginResult = await BaseApi.post("signin/", loginpayload);

      if (loginResult) {
        setIsSubmitting(false);
        localStorage.setItem("userData", JSON.stringify(loginResult.data.data));
        navigate("/Product");
      } else {
        setIsSubmitting(false);
        if (e.response.data.errors !== undefined) {
          setValidationErrors(e.response.data.errors);
        }
      }
    }
  };

  return (
    <div className="signup">
      <img src={logo} className="signuplogo" />
      <div className="Topg">
        <div className="top">
          <h2>Sign Up Now </h2>
          <form onSubmit={(e) => registerAction(e)}>
            <input
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              placeholder=" Username"
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
              value={Phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="form-control"
              placeholder="Mobile No"
            />
            <br />

            <button className="signupbtn" type="submit">
              signup
            </button>
            <p>
              Already have an account ?
              <button className="loginbtn3" onClick={() => forloginuppage()}>
                Login here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
