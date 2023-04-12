import { Link } from "react-router-dom";
import ContactUs from "./pages/ContactUs";

const Navbar = () => {
  return (
    <div className="">
      <nav>
        <ul>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/process">Process</Link>
          </li>
          <li>
            <Link to="/live-tools">Live tools</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
        <ContactUs />
      </nav>

      <hr />
      
    </div>
  );
}

export default Navbar;