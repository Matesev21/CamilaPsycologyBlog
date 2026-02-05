import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import BlogPreview from "./components/BlogPreview/BlogPreview";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <BlogPreview />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
