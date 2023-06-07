import React, { useState } from "react";
import BaseApi from "../Api/BaseAPI";
import { useNavigate } from "react-router-dom";

const Changepasword = () => {
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
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
        setSuccess(true);
        navigate("/product");
      }
    } catch (error) {
      setError("An error occurred while updating the password.");
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      {success && <p>Password updated successfully!</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default Changepasword;
