import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "../../helpers";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return !isAuthenticated ? (
    <Navigate
      to={location?.state?.from?.pathname ?? "/"}
      state={{ from: location }}
      replace={true}
    />
  ) : (
    <Outlet />
  );
};

export { PrivateRoute };
