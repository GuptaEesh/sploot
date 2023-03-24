import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../helpers";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated ? (
    <Navigate
      to={location?.state?.from?.pathname ?? "/blogs"}
      state={{ from: location }}
      replace={true}
    />
  ) : (
    <Outlet />
  );
};

export { PublicRoute };
