import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import localStorageUtil from "./LocalStorageUtil";
// import { ProtectedRoutesProps } from '../types/RouteTypes';

const ProtectedRoutes = ({
  element: Element,
  //   isProfileSetup,
  //   isSetupProfilePage = false,
}) => {
  const location = useLocation();

  if (
    !localStorageUtil.existInLocalStorage("email") &&
    (location.pathname.includes("/admin") ||
      location.pathname.includes("/user"))
  ) {
    return <Navigate to="/" />;
  }

  //   if (localStorageUtil.existInLocalStorage('Token') && !isProfileSetup && !isSetupProfilePage) {
  //     return <Navigate to="/setup-coach-profile" state={{ from: location }} />;
  //   }

  return <Element />;
};

export default ProtectedRoutes;
