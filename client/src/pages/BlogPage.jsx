import React from "react";
import BlogDiary from "../components/BlogDiary/BlogDiary";
import BlogInstagramFeed from "../components/BlogInstagramFeed/BlogInstagramFeed";
import BlogTitle from "../components/BlogTitle/BlogTitle";

const BlogPage = () => {
  return (
    <section>
      <BlogTitle />

      <BlogDiary />

      <BlogInstagramFeed />
    </section>
  );
};

export default BlogPage;
