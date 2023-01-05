import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import Menu from "./Menu";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("");

  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate("/Login");
  };

  const navigatetoRegister = () => {
    // 👇️ navigate to /
    navigate("/Register");
  };

  return (
    <div>
      <div>
        <button>Hi</button>
        <button onClick={navigateToLogin}>Login</button>
        <hr />
        <button onClick={navigatetoRegister}>Register</button>
        <hr />

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
