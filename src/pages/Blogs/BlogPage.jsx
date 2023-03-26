import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header } from "../../components";
import { getBlogPage, useAuth } from "../../helpers";
import "./Blogs.css";
const BlogPage = () => {
  const { slug } = useParams();
  const [blogPage, setBlogPage] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await getBlogPage(slug);
        setBlogPage(res.data.data.data);
      } catch (e) {}
    })();
  }, []);
  if (!blogPage.length) {
    return <h1>No blogs for this category..</h1>;
  }
  return (
    <>
      <Header />
      <h1 className="underline">{slug.toUpperCase()}</h1>
      <div className="grid grid-3 gap-1">
        {blogPage.map(({ id, description, imageUrl, title }) => (
          <div
            key={id}
            className="category-insight flex flex-c align-center p-1"
          >
            <img className="br-010" src={imageUrl} alt={title} />
            <strong>{title}</strong>
            <span>{description}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export { BlogPage };
