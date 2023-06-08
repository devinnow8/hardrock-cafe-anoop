import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseApi from "../Api/BaseAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
const Forgetpasword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("INVALID");
  const [alert, setAlert] = useState("CHECK YOUR EMAIL");
  const navigate = useNavigate();
  const forloginuppage = () => {
    navigate("/");
  };
  const handleSubmit = async (e) => {
    console.log("here call");
    e.preventDefault();
    setError("");

    const response = await BaseApi.post(
      "password-reset/",
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.status === 200) {
      setAlert("CHECK YOUR EMAIL");
      toast(alert, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,

        pauseOnHover: true,
        draggable: false,

        theme: "light",
      });
      navigate("/");
    } else {
      setError("This field may not be blank.");
      toast(error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,

        pauseOnHover: true,
        draggable: false,

        theme: "light",
      });
    }
  };

  return (
    <div class="animate__animated animate__zoomInRight">
      <div className="forgotpass">
        <div className="forgotpass1">
          <h1 className="titlef">Forgot your Password ?</h1>
          <p className="titlep"> Please enter the email</p>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control3"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <button className="loginbtn4" onClick={(e) => handleSubmit(e)}>
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
              Request password reset
            </button>
          </div>
          <div>
            <button className="loginbtn5" onClick={() => forloginuppage()}>
              Back to signin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgetpasword;
