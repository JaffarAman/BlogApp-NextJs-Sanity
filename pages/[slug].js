import React from "react";
import Image from "next/image";
import Link from "next/link";
const BlogDetialPage = () => {
  return (
    <div className="container py-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Blog post Title
          </li>
        </ol>
      </nav>
      <div className="post-content-wrap">
        <h1>Blog single post Title</h1>
        <img
          width="1600"
          height="450"
          src={"https://via.placeholder.com/1600"}
          class="card-img-top"
          alt="..."
        />
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};
export default BlogDetialPage;
