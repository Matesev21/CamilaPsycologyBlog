import React from "react";
import Hero from "../components/Hero/Hero";
import StickyNotes from "../components/StickyNotes/StickyNotes";
import About from "../components/About/About";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import BlogPreview from "../components/BlogPreview/BlogPreview";

const Home = () => {
  return (
    <main>
      <Hero />
      <StickyNotes />
      <About />
      <BlogPreview />
      <HowItWorks />
    </main>
  );
};

export default Home;
