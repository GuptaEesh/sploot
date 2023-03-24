import { Route, Routes } from "react-router";
import { PrivateRoute, PublicRoute } from "./components";
import { BlogPage, BlogsCategories, Login } from "./pages";

function App() {
  // useEffect(() => {
  //   const res=axios.get("https://api-staging-v2.sploot.space/api/v2/cms/post-categories")
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/blogs" element={<BlogsCategories />} />
          <Route path="/blogs/:id" element={<BlogPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
