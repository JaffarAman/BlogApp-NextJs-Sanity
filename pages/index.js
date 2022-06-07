import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <h1>
          <span className="h1Heading"> Welcome </span> to <br />
          Sanity.IO and Next-Js Blog App
        </h1>
        <Link href="/blog">
          <a className="btn btn-primary">Go to Blog</a>
        </Link>
      </div>
    </>
  );
}
