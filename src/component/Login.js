import React, { useEffect, useState } from "react";
import logo from "../Image/Logo.svg";
import { useNavigate } from "react-router-dom";
import BaseApi from "../Api/BaseAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("userData"));
    if (user !== null) {
      navigate("/Product");
    }
  }, []);

  const forsignuppage = () => {
    navigate("/signup");
  };

  const loginAction = async (e) => {
    setValidationErrors({});
    e.preventDefault();

    let payload = {
      email: email,
      password: password,
    };
    let result = await BaseApi.post("signin/", payload);

    if (result.data !== "") {
      localStorage.setItem("userData", JSON.stringify(result.data.data));
      navigate("/Product");
    } else {
      if (result.error !== undefined) {
        setValidationErrors(result.error.detail);
        toast(result.error.detail, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div className="signup">
      <img src={logo} className="signuplogo" />
      <div className="Topg">
        <div className="top">
          <h2>Login </h2>
          <form
            onSubmit={(e) => {
              loginAction(e);
            }}
          >
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
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
            />
            <br />
            <div>
              <button onClick={loginAction} className="loginbtn2">
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={true}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                <ToastContainer />
                Login
              </button>
            </div>
            <p>
              Don't have an account ?
              <button className="loginbtn3" onClick={() => forsignuppage()}>
                SignUp
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
