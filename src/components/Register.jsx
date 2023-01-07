import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  localStorage.removeItem("data");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let createnewdeatails = async () => {
    let url = `http://localhost:3001/register`; //need to add in backend

    let data = {
      name: name,
      email: email,
      pass: pass,
    };

    await axios.post(url, data);
    props.onFormSwitch("login");
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          name="name"
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
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
        <br />

        <button
          className="btn btn-primary"
          onClick={() => createnewdeatails()}
          type="submit"
        >
          Register
        </button>
      </form>
      <li className="ul">
        <Link className="nav-link" to="/login">
          Already have an account? login here.
        </Link>
      </li>
    </div>
  );
};

export default Register;
