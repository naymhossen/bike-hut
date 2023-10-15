import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home";
import Bikes from "./Components/Pages/Bikes";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Signup from "./Components/AuthBox/Signup";
import Signin from "./Components/AuthBox/Signin";
import Authprovider from "./Components/AuthBox/Authprovider";
import Users from "./Components/Pages/Users";

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
        path: "/allbikes",
        element: <Bikes />,
      },
      {
        path: "/blog",
        element: <Blog />,
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
        path: '/users',
        element: <Users />,
        loader: () => fetch('http://localhost:3000/users')
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
