import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const main = () => {
  return (
    <div className="min-h-screen">
      <NavBar className="py-10"></NavBar>
      <Outlet></Outlet>
      <Footer className="py-10"></Footer>
    </div>
  );
};

export default main;
