import { Routes, Route } from "react-router-dom";
import { CreatePost } from "./features/post/presentation/createPost/create-post";
import Feed from "./features/post/presentation/feed/Feed";
import MyPosts from "./features/post/presentation/myPosts/MyPosts";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex w="100vw" h="100vh">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/post/admin" element={<MyPosts />} />
      </Routes>
    </Flex>
  );
}

export default App;
