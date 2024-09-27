import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export default function AuthMiddleware() {
  const { user } = useAuthContext();

  if (!user) return <Navigate to="/auth/login" />;

  return <Outlet />;
}
