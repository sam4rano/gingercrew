import { Link } from "react-router-dom";
import ContactUs from "../pages/ContactUs";

const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between list-none bg-[#FFFFFF] text-black py-4 text-lg">
        <li className="p-[8px]">
          <Link to="/">
            <span className="font-bold">GINGER</span>CREW
          </Link>
        </li>
        <ul className="flex flex-row justify-around items-center space-x-2 md:space-x-8">
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
        <li className="p-[8px] border-solid border-2 border-slate-950 rounded-lg ">
          <Link to="/contact">Start A Project</Link>
        </li>
      </nav>

      <hr />
    </>
  );
}

export default Navbar;