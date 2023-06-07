import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgetpasword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const forloginuppage = () => {
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  };
  return (
    <div>
      <div className="forgotpass">
        <div className="forgotpass1">
          <h1 className="titlef">Forgot your Password ?</h1>
          <p className="titlep"> Please enter the email</p>
          <form onSubmit={handleSubmit}>
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
              <button className="loginbtn4">Request password reset</button>
            </div>
            <div>
              <button className="loginbtn5" onClick={() => forloginuppage()}>
                Back to signin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgetpasword;
