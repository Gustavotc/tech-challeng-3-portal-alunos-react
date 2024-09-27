import { Outlet } from "react-router-dom";
import FallbackScreen from "../../components/fallbackScreen/FallbackScreen";
import { useAuthContext } from "../../contexts/AuthContext";
import User from "../../features/auth/domain/models/User";

export default function TeacherMiddleware() {
  const { user } = useAuthContext();

  if (!User.isTeacher(user)) return <FallbackScreen type="unauthorized" />;

  return <Outlet />;
}
