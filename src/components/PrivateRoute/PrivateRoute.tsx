import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<{
  children: any;
}> = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("user") || "{}").token;

  if (token === undefined) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default PrivateRoute;
