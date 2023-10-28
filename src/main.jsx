import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Signup from "./Components/AuthBox/Signup";
import Signin from "./Components/AuthBox/Signin";
import Authprovider from "./Components/AuthBox/Authprovider";
import CheckOut from "./Components/Pages/CheckOut";
import Bookings from "./Components/Pages/Bookings";
import PrivateRoute from "./Components/AuthBox/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: 'checkout/:id',
        element: <PrivateRoute><CheckOut /></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/bookings',
        element: <PrivateRoute><Bookings /></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
