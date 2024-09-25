import { Routes, Route } from "react-router-dom";
import { CreatePost } from "./features/post/presentation/createPost/create-post";
import Feed from "./features/post/presentation/feed/Feed";
import { Register } from "./features/auth/presentation/register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/post/create" element={<CreatePost />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
}

export default App;
