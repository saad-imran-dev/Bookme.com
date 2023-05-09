import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export default function Signin() {
  const [user, setUser] = useState({ Email: "", Password: "" });

  const navigate = useNavigate();

  function handleSubmit() {
    // console.log(user.Email, user.Password);
    if (user.Email !== "saad.imran.vohra@gmail.com") {
      document.getElementsByClassName("danger")[0].style.display = "block";
    }
  }

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className="centerPage">
      <div className="login-box">
        {/* <div className="login-ele title">BookMe.com</div> */}
        <img
          className="logo"
          src="https://bookmepk.s3.eu-central-1.amazonaws.com/static/custom/V3/images/new-logo-header.png"
          alt=""
          onClick={() => navigate("/")}
        />
        <input
          className="login-ele inp"
          name="Email"
          placeholder="Email"
          value={user.Email}
          style={{ marginBottom: "0px" }}
          type="email"
          onChange={handleInput}
        />
        <input
          className="login-ele inp"
          name="Password"
          placeholder="Password"
          value={user.Password}
          style={{ marginBottom: "0px" }}
          type="password"
          onChange={handleInput}
        />
        <div className="error">
          <div className="danger">Wrong Password or Email entered</div>
        </div>
        <button
          className="login-ele btn"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <div
          className="login-ele link"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}