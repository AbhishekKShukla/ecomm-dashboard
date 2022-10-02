import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/add");
    }
  });

  async function userLogin() {
    let item = { Email, Password };
    let result = await fetch(
      "http://localhost:52154/api/ReactUser/ReactUserLogin",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history("/add");
  }

  function resetLogin() {
    alert("h");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>User Login </h1>
        <input
          type="text"
          className="form-control"
          autoComplete="new-password"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          autoComplete="new-password"
          value={Password}
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="btn btn-primary" onClick={userLogin}>
          Login
        </button>
        <button className="btn btn-danger" onClick={resetLogin}>
          Reset
        </button>
      </div>
    </>
  );
};
export default Login;
