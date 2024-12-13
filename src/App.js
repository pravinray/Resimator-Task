import React from "react";
import { Login } from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";

const App = () => {
  return (
    <React.StrictMode>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* routes protected for admin and user dashboard */}
          <Route
            path="/admin"
            element={<ProtectedRoutes element={AdminDashboard} />}
          />
          <Route
            path="/user"
            element={<ProtectedRoutes element={UserDashboard} />}
          />

          {/* redirected to login page for unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

export default App;
