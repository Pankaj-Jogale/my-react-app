import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Redirect() {
  return (
    <div className="login-form">
      <h1>
        <li className="ul">
          <Link className="nav-link" to="/user/menu">
            <button className="btn btn-primary"> Shop</button>
          </Link>
        </li>
      </h1>

      <h1>
        <li className="ul">
          <Link className="nav-link " aria-current="page" to="/">
            <button className="btn btn-primary"> Log-Out</button>
          </Link>
        </li>
      </h1>
    </div>
  );
}

export default Redirect;
