import React from "react";
import { useNavigate } from "react-router";

const Category = ({ blogs }) => {
  console.log(blogs);
  const navigate = useNavigate();
  const openBlogPage = () => {
    navigate(`/blogs`);
  };
  return blogs?.map(({ id, imageUrl, name, slug }) => (
    <div key={id}>
      {name}
      <picture onClick={openBlogPage}>
        <img
          style={{ height: "2rem", margin: "2rem", cursor: "pointer" }}
          src={imageUrl}
          alt={name}
        />
      </picture>
    </div>
  ));
};

export { Category };
