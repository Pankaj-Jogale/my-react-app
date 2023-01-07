import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let [list, setList] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let logindeatails = async () => {
    let url = `http://localhost:3001/login`;
    let response = await axios.get(url);
    list = [...response.data];
    setList(list);

    list.map((item) => {
      //console.log(item.uname);
      if (item.email === email && item.upass === pass) {
        console.log("hello");
        let data = {
          userloggedIn: true,
        };
        localStorage.setItem("data", JSON.stringify(data));

        window.location.href = "http://localhost:3000/user/redirect";
      }
    });
  };

  /*const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type"
      },
    });
  };
  */
  return (
    <div className="auth-form-container">
      <form method="POST" className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <br />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          name="password"
          id="password"
        />
        <br />
        <button
          className="btn btn-primary"
          onClick={() => logindeatails()}
          type="submit"
        >
          Log in
        </button>
      </form>

      <li className="ul">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
    </div>
  );
};

export default Login;
