import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBlogPage, useAuth } from "../../helpers";

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
  return blogPage.map(({ id, categorySlug, description, imageUrl, title }) => (
    <div key={id}>
      {title}
      <small>{description}</small>
      <img
        style={{ height: "2rem", margin: "1rem" }}
        src={imageUrl}
        alt={title}
      />
    </div>
  ));
};

export { BlogPage };
