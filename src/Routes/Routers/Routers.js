import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Main2 from "../../Layout/Main2";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Services from "../../Pages/Services/Services";
import AddService from "../../Pages/AddService/AddService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch(`https://moms-kitchen-service-server.vercel.app/foods`),
      },
      {
        path: "/services/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(
            `https://moms-kitchen-service-server.vercel.app/foods/${params.id}`
          ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      { path: "/blogs", element: <Blog></Blog> },
    ],
  },
  {
    path: "/",
    element: <Main2></Main2>,
    children: [
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "*", element: <Error></Error> },
    ],
  },
]);
