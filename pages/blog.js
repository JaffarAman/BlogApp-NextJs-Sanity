import React from "react";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
  return (
    <section className="container my-3">
      <h1 className="my-5">Blog Page</h1>
      <div className="row">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
