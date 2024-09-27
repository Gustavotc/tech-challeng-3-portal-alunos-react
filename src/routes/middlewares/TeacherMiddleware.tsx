import { Outlet } from "react-router-dom";
import FallbackScreen from "../../components/fallbackScreen/FallbackScreen";
import { useAuthContext } from "../../contexts/AuthContext";

export default function TeacherMiddleware() {
  const { user } = useAuthContext();

  if (user?.role.type !== "DOCENTE")
    return <FallbackScreen type="unauthorized" />;

  return <Outlet />;
}
