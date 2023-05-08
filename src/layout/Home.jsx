// import Navbar from "./components/Navbar";
import Footer from "../pages/Footer";
import Slider from "../pages/Slider";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import About from "../pages/About";
import Testimonial from "../pages/Testimonial";
import HeroSection from "../pages/HeroSection";
import Navbar from "../components/Navbar";
import Process from "../pages/Process";
import Portfolio from "../pages/Portfolio";




const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Slider />
      <About />
      <Portfolio />
      <Services />
      <Testimonial />
      <Contact />
      <Process />
      <Footer />
    </>
  );
};

export default Home;
