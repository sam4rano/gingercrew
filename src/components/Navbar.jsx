import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex flex-row justify-around list-none bg-[#FFFFFF]
 text-black py-4 text-lg lg:fixed lg:top-0 left-0 right-0 opacity-90 max-w-[1024]"
      >
        <li className="p-[8px]">
          <Link to="/">
            <span className="font-bold">GINGER</span>CREW
          </Link>
        </li>
        <ul className="flex flex-row justify-between items-center space-x-2 md:space-x-8 text-[12px]">
          <li className="text-black">
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
        <li className="p-[8px] text-[12px] border-solid border-2 border-slate-950 rounded-lg hover:text-white hover:bg-black">
          <Link to="/contact">Start A Project</Link>
        </li>
      </nav>

      <hr />
    </>
  );
}

export default Navbar;