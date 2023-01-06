import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Home from "./components/Home";

import AppNavLinks from "./components/AppNavLinks";

function App() {
  return (
    <div>
      <AppNavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
