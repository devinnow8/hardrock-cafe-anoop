import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseApi from "../Api/BaseAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
const ConfirmForgetpassword = () => {
  let { uid, token } = useParams();
  const [new_password1, setNew_password1] = useState("");
  const [new_password2, setNew_password2] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const response = await BaseApi.post(
      "confirmForgetpassword/uid/<uid>/token/<token>",
      {
        new_password1,
        new_password2,
        uid,
        token,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data.status === 200) {
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
      setError("This field may not be blank");
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
    <div class="animate__animated animate__backInUp">
      <div>
        <input
          type="password"
          value={new_password1}
          onChange={(e) => setNew_password1(e.target.value)}
          placeholder="Password"
        />
      </div>
      <div>
        <input
          type="password"
          value={new_password2}
          onChange={(e) => setNew_password2(e.target.value)}
          placeholder="Confirm Password"
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
    </div>
  );
};

export default ConfirmForgetpassword;
