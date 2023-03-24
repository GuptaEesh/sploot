import React, { useEffect, useState } from "react";
import { Category } from "../../components";
import { getBlogs, useAuth } from "../../helpers";
import { useNavigate } from "react-router";

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
  return blogs?.map(({ id, imageUrl, name, slug }) => (
    <div key={id}>
      {name}
      <button onClick={() => openBlogPage(slug)}>
        <img
          style={{ height: "2rem", margin: "2rem", cursor: "pointer" }}
          src={imageUrl}
          alt={name}
        />
      </button>
    </div>
  ));
};

export { BlogsCategories };
