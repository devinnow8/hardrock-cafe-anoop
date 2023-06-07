import React from "react";
import { useNavigate } from "react-router-dom";
import BaseApi from "../Api/BaseAPI";

function Signout() {
  const navigate = useNavigate();

  const actionsignout = () => {
    let user = JSON.parse(localStorage.getItem("userData"));
    let payload = {
      refresh: user.refresh,
    };

    let result = BaseApi.post("signout/", payload);
    if (result.data !== "") {
      navigate("/");
      localStorage.removeItem("userData");
    }
  };

  return (
    <div>
      <p className="userinfo">
        {JSON.parse(localStorage.getItem("userData")).username}
      </p>
      <button
        className="logoutbtn3"
        onClick={() => {
          actionsignout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Signout;
