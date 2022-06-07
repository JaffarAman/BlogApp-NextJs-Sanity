import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="col-lg-3 col-md-6  ">
      <div className="card" style={{ width: "100%", margin: "15px 0" }}>
        <img
          src={"https://via.placeholder.com/450"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link href="blog-post-one">
            <a className="btn btn-primary">Go somewhere</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
