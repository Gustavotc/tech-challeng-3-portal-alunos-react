import { Routes, Route } from "react-router-dom";
import { CreatePost } from "./pages/create-post";



function App() {
  return (
    <Routes>
      <Route path="/" element={<CreatePost />} />
    </Routes>
  );
}

export default App;
