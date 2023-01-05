import axios from "axios";
import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  let [list, setList] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(email);
  };

  let logindeatails = async () => {
    let url = `http://localhost:3001/login`;
    let response = await axios.get(url);
    list = [...response.data];
    setList(list);

    list.map((item) => {
      //console.log(item.uname);
      if (item.email === email && item.upass === pass) {
        console.log("Login Success");
      }
    });
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
    </div>
  );
};

export default Login;
