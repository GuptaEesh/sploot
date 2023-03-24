import { Route, Routes } from "react-router";
import "./App.css";
import { BlogPage, BlogsCategories, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/blogs" element={<BlogsCategories />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
