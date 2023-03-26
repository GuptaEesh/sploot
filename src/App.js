import { Route, Routes } from "react-router";
import { PrivateRoute, PublicRoute } from "./components";
import { BlogPage, BlogsCategories, Login } from "./pages";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/blogs" element={<BlogsCategories />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
