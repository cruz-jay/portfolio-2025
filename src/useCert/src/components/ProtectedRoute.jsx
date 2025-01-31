import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import api from "../api";

const ProtectedRoute = ({ children }) => {
  const [isAuth, setAuth] = useState(null);
  const [profileComplete, setProfileComplete] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    auth().catch(() => {
      setAuth(false);
      setProfileComplete(false);
    });
  }, []);

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setAuth(false);
      setProfileComplete(false);
      return;
    }
    const decoded = jwtDecode(token);

    if (decoded.exp < Date.now() / 1000) {
      await REFRESH_TOKEN();
    } else {
      setAuth(true);
      setProfileComplete(decoded.profile_completed === true);
      try {
        const response = await api.get("/api/user-profile/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    }
  };

  if (isAuth === null || profileComplete === null || userRole === null) {
    return <>Loading...</>;
  }

  if (!isAuth) {
    return <Navigate to="/useCert/login" />; // Add leading slash
  }

  const currentPath = window.location.pathname;

  // Role-based routing
  if (userRole === "staff") {
    // If staff tries to access student pages, redirect to faculty dashboard
    if (currentPath === "/") {
      return <Navigate to="/useCert/faculty-dashboard" />; // Add leading slash
    }
  } else {
    // If student tries to access faculty pages, redirect to home
    if (currentPath === "/useCert/faculty-dashboard") {
      return <Navigate to="/useCert" />; // Add leading slash
    }
  }

  // Profile completion check for both roles
  if (!profileComplete && currentPath !== "/useCert/complete-profile") {
    return <Navigate to="/useCert/complete-profile" />; // Add leading slash
  }

  if (profileComplete && currentPath === "/useCert/complete-profile") {
    return userRole === "staff" ? (
      <Navigate to="/useCert/faculty-dashboard" /> // Add leading slash
    ) : (
      <Navigate to="/useCert" /> // Add leading slash
    );
  }

  return children;
};
export default ProtectedRoute;
