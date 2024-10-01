import { Routes, Route, Navigate } from "react-router-dom";
import BaseScreenTemplate from "../components/baseScreenTemplate/BaseScreenTemplate";
import { Login } from "../features/auth/presentation/login/Login";
import { Register } from "../features/auth/presentation/register/Register";
import Feed from "../features/post/presentation/feed/Feed";
import { CreatePost } from "../features/post/presentation/createPost/create-post";
import MyPosts from "../features/post/presentation/myPosts/MyPosts";
import FallbackScreen from "../components/fallbackScreen/FallbackScreen";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import TeacherMiddleware from "./middlewares/TeacherMiddleware";
import PostDetails from "../features/post/presentation/postDetails/PostDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />

      <Route path="/" element={<BaseScreenTemplate />}>
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="posts" element={<AuthMiddleware />}>
          <Route index element={<Feed />} />
          <Route path="details/:id" element={<PostDetails />} />
          <Route element={<TeacherMiddleware />}>
            <Route path="create/:id?" element={<CreatePost />} />
            <Route path="admin" element={<MyPosts />} />
          </Route>
        </Route>

        <Route path="*" element={<FallbackScreen type="notFound" />} />
      </Route>
    </Routes>
  );
}
