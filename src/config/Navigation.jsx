import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Singup from "../Components/Singup";
import Login from "../Components/Login";
import Dashbord from "../Components/Dashbord";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Singup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Dashbord" element={<Dashbord />} />
    </Route>
  )
);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
