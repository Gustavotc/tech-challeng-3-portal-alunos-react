import { Routes, Route } from "react-router-dom";
import { CreatePost } from "./features/post/presentation/createPost/create-post";
import Feed from "./features/post/presentation/feed/Feed";
import MyPosts from "./features/post/presentation/myPosts/MyPosts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/post/create" element={<CreatePost />} />
      <Route path="/post/admin" element={<MyPosts />} />
    </Routes>
  );
}

export default App;
