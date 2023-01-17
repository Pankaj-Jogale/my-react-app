import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Home from "./components/Home";
import UserDashboard from "./components/UserDashboard";
import Privateroute from "./components/Privateroute";
import Users from "./components/Users";
import Video from "./components/Video";

import AppNavLinks from "./components/AppNavLinks";
import Redirect from "./components/Redirect";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={HandleError} />
      <AppNavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/video" element={<Video />} />

        <Route path="/user" element={<Privateroute />}>
          <Route path="menu" element={<Menu />} />
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="redirect" element={<Redirect />} />
        </Route>
      </Routes>
      <ErrorBoundary />
    </div>
  );
}

function HandleError() {
  return (
    <div>
      <h1>error occured</h1>
    </div>
  );
}
export default App;
