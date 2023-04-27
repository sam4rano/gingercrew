// import Navbar from "./components/Navbar";
import Footer from "../pages/Footer";
import Info from "../pages/Info";
import Slider from "../pages/Slider";
import MoreCta from "../pages/MoreCta";
import Services from "../pages/Services";
import About from "../pages/About";
import Testimonial from "../pages/Testimonial";
import WhatWeDo from "../pages/WhatWeDo";
import HeroSection from "../pages/HeroSection";
import Navbar from "../components/Navbar";
import AboutUs from "../pages/AboutUs";
import Portfolio from "../pages/Portfolio";



const Layout = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Slider />
      <About />
      <Portfolio />
      <Info />
      <Testimonial />
      <AboutUs />
      <Services />
      <WhatWeDo />

      <MoreCta />
      <Footer />
    </>
  );
};

export default Layout;
