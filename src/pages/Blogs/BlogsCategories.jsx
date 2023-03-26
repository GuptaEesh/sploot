import React, { useEffect, useState } from "react";
import { getBlogs, useAuth } from "../../helpers";
import { useNavigate } from "react-router";
import "./Blogs.css";
import { Header } from "../../components";
const BlogsCategories = () => {
  const [blogs, setBlogs] = useState([]);
  const { authToken } = useAuth();
  useEffect(() => {
    (async () => {
      const res = await getBlogs(authToken.token);
      setBlogs(res.data);
    })();
  }, []);
  const navigate = useNavigate();
  const openBlogPage = (slug) => {
    navigate(`/blog/${slug}`);
  };
  return (
    <>
      <Header />
      <h1 className="underline">Blogs Categories</h1>
      <div className="grid grid-3 gap-2">
        {blogs?.map(({ id, imageUrl, name, slug }) => (
          <article
            key={id}
            className="flex flex-c align-center justify-sb br-010"
          >
            <button
              className="btn ptr img-container"
              onClick={() => openBlogPage(slug)}
            >
              <img className="category-img br-010" src={imageUrl} alt={name} />
            </button>
            <span className="underline">{name}</span>
          </article>
        ))}
      </div>
    </>
  );
};

export { BlogsCategories };
