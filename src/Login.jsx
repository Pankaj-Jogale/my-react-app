import axios from "axios";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let [list, setList] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const navigate = useNavigate();
  const navigateToMenu = () => {
    // 👇️ navigate to /contacts
    navigate("/menu");
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
        navigateToMenu();
      }
    });
  };

  const Home = () => {
    return <h2>Home</h2>;
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          name="password"
          id="password"
        />
        <button onClick={() => logindeatails()} type="submit">
          Log in
        </button>
      </form>

      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Register here
      </button>
      <Routes>
        <Route path="/menu" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Login;
