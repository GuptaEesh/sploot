import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../helpers";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <Navigate to={"/"} /> : <Outlet />;
};

export { PrivateRoute };
