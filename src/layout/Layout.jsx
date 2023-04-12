// import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Info from "./pages/Info";
import Slider from "./pages/Slider";
import MoreCta from "./pages/MoreCta";
import Services from "./pages/Services";
import Statistics from "./pages/Statistics";
import Testimonial from "./pages/Testimonial";
import WhatWeDo from "./pages/WhatWeDo";
import HeroSection from "./pages/HeroSection";
import ContactUs from "../pages/ContactUs";


const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <Slider />
      <Info />
      <Statistics />
      <AboutUs />
      <Services />
      <WhatWeDo />
      <Testimonial />
      <ContactUs />
      <MoreCta />
      <Footer />
    </>
  );
};

export default Layout;
