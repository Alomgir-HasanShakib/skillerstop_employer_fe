// src/protected/PublicRoute.jsx
import { Navigate } from "react-router";
import useAuth from "../../hooks/useAuth";


const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (user) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default PublicRoute;
