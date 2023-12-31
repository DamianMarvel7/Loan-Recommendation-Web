import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
