import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import localStorageUtil from "./LocalStorageUtil";

const ProtectedRoutes = ({
  element: Element,
}) => {
  const location = useLocation();

  if (
    !localStorageUtil.existInLocalStorage("email") &&
    (location.pathname.includes("/admin") ||
      location.pathname.includes("/user"))
  ) {
    return <Navigate to="/" />;
  }

  return <Element />;
};

export default ProtectedRoutes;
