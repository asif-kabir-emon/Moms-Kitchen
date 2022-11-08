import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main2 = () => {
  return (
    <div className="min-h-screen">
      <NavBar className="py-10"></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main2;
