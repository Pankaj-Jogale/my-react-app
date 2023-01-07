import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard";
import Privateroute from "./components/Privateroute";

import AppNavLinks from "./components/AppNavLinks";
import Redirect from "./components/Redirect";

function App() {
  return (
    <div>
      <AppNavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />

        <Route path="/user" element={<Privateroute />}>
          <Route path="menu" element={<Menu />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="redirect" element={<Redirect />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
