import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

interface GuestRouteProps {
  children: ReactNode;
  redirectTo?: string; 
}

const GuestRoute = ({ children, redirectTo = "/connectivity" }: GuestRouteProps) => {
  const { session, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; 
  }


  if (session) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default GuestRoute;
