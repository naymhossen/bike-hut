/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);

  const location = useLocation();
  if (loding) {
    return <progress className="progress w-96"></progress>;
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin" replace />;
};

export default PrivateRoute;
