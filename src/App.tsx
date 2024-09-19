import { Routes, Route } from "react-router-dom";
import { CreatePost } from "./features/post/presentation/createPost/create-post";
import Feed from "./features/post/presentation/feed/Feed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/post/create" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
