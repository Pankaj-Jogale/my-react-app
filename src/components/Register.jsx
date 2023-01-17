import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
  localStorage.removeItem("data");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  let [list, setList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let createnewdeatails = async () => {
    let url = `http://localhost:3001/register`; //need to add in backend

    /*
    let url2 = `http://localhost:3001/login`;
    let response = await axios.get(url2);
    list = [...response.data];
    setList(list);
    list.map((item) => {
      //console.log(item.uname);
      if (item.email === email) {
        console.log("account already available");
        return;
      }
    });*/
    let data = {
      name: name,
      email: email,
      pass: pass,
    };

    if (name === "" || email === "" || pass === "") {
      setError("Please fill all the details");

      return;
    } else {
      setError("");
    }

    let ans = await axios.post(url, data);
    console.log(ans.status);
    if (ans.status) {
      setError("Account created successfully");
    }
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
        <p className="error">{error}</p>
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
