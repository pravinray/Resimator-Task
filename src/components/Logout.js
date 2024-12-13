import React from "react";

import localStorageUtil from "../utils/LocalStorageUtil";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorageUtil.clearLocalStorage("email");
        localStorageUtil.clearLocalStorage("password");
        navigate("/");
      };
  return (
    <div>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded float-right"
        onClick={logout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
