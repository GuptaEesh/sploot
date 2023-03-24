import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../helpers";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to={"/blogs"} /> : <Outlet />;
};

export { PublicRoute };
