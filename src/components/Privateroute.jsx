import React from "react";
import { Navigate, Outlet } from "react-router-dom";

let Privateroute = () => {
  let data = localStorage.getItem("data");
  if (data != null) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
export default Privateroute;
