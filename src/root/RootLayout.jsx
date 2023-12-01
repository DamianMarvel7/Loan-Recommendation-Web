import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

// {
//     "Customer_ID": "4",
//     "Gender": "Male",
//     "Married": "No",
//     "Dependents": "19",
//     "Education": "Graduate",
//     "ApplicantIncome": 6600,
//     "Property_Area": "Urban",
//     "Username":"johan"
// }

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
