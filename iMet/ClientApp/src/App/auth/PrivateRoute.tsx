import React from "react";
import { Navigate } from "react-router";

export const PrivateRoute: React.FC = ({ children }) => {
  const auth = false;
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
