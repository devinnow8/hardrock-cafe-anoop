import React, { useState } from "react";
import BaseApi from "../Api/BaseAPI";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Changepasword = () => {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const productpage = () => {
    navigate("/Product");
  };

  const handleSubmit = async (e) => {
    let user = JSON.parse(localStorage.getItem("userData"));

    const response = await BaseApi.put(
      "changepassword/",
      {
        old_password,
        new_password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.access}`,
        },
      }
    );

    if (response.data.status === 200) {
      navigate("/product");
    } else {
      setError("Wrong password,Please try again");
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
    <div>
      <h2>Update Password</h2>

      <div>
        <label>Old Password</label>
        <input
          type="password"
          value={old_password}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>New Password</label>
        <input
          type="password"
          value={new_password}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      </div>

      <button onClick={() => handleSubmit()}>
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
        Update Password
      </button>
      <button className="loginbtn5" onClick={() => productpage()}>
        Back to Home Page
      </button>
    </div>
  );
};

export default Changepasword;
