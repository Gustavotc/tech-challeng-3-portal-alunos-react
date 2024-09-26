import { Routes, Route } from "react-router-dom";
import { CreatePost } from "./features/post/presentation/createPost/create-post";
import MyPosts from "./features/post/presentation/myPosts/MyPosts";
import { Flex } from "@chakra-ui/react";
import { EditPost } from "./features/post/presentation/editPost/edit-post";
import Feed from "./features/post/presentation/feed/Feed";
import { Register } from "./features/auth/presentation/register/Register";
import { Login } from "./features/auth/presentation/login/Login";

function App() {
  return (
    <Flex w="100vw" h="100vh">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/post/edit" element={<EditPost />} />
        <Route path="/post/admin" element={<MyPosts />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </Flex>
  );
}

export default App;
