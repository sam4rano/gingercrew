// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>

//       <nav
//         className="flex flex-row justify-between list-none bg-[#FFFFFF] box-border
//  text-black p-4 text-lg fixed top-0 left-0 right-0 opacity-90 w-full"
//       >
//         <li className="p-[8px]">
//           <Link to="/">
//             <span className="font-bold">GINGER</span>CREW
//           </Link>
//         </li>
//         <ul className="flex flex-row justify-between items-center space-x-2 md:space-x-8 text-[12px]">
//           <li className="text-black">
//             <Link to="/services">Services</Link>
//           </li>
//           <li>
//             <Link to="/portfolio">Portfolio</Link>
//           </li>
//           <li>
//             <Link to="/about-us">About us</Link>
//           </li>
//           <li>
//             <Link to="/process">Process</Link>
//           </li>
//           <li>
//             <Link to="/live-tools">Live tools</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//         </ul>
//         <li className="p-[8px] text-[12px] border-solid border-2 border-slate-950 rounded-lg hover:text-white hover:bg-black">
//           <Link to="/contact">Start A Project</Link>
//         </li>
//       </nav>

//       <hr />
//     </>
//   );
// }

// export default Navbar;






import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white p-6 fixed top-0 left-0 right-0 opacity-90 w-full">
      <Link to="/" className="flex items-center text-black font-bold">
        <span>GINGER</span>CREW
      </Link>
      <button
        type="button"
        className="block md:hidden border border-white rounded px-2 py-1 ml-auto"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#000"
              d="M17.174 15.819L10 8.645l-7.174 7.174a.786.786 0 1 1-1.112-1.112L8.888 7.532 1.714.358a.786.786 0 1 1 1.112-1.112L10 6.421l7.174-7.174a.786.786 0 1 1 1.112 1.112L11.112 7.532l7.174 7.174a.786.786 0 1 1-1.112 1.113z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
          >
            <line
              x1="5"
              y1="14"
              x2="24"
              y2="14"
              stroke="black"
              stroke-width="2"
            />
            <line
              x1="5"
              y1="18"
              x2="20"
              y2="18"
              stroke="black"
              stroke-width="2"
            />
            <line
              x1="5"
              y1="24"
              x2="22"
              y2="24"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        )}
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center w-full md:w-auto`}
      >
        <li>
          <Link
            to="/services"
            className="block mt-4 md:inline-block md:mt-0 text-black mr-4 "
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="block mt-4 md:inline-block md:mt-0 text-black mr-4 "
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="block mt-4 md:inline-block md:mt-0 text-black  mr-4 "
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/process"
            className="block mt-4 md:inline-block md:mt-0 text-black  mr-4"
          >
            Process
          </Link>
        </li>
        <li>
          <Link
            to="/livetools"
            className="block mt-4 md:inline-block md:mt-0 text-black mr-4"
          >
            Live Tools
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            className="block mt-4 md:inline-block md:mt-0 text-black"
          >
            Blogs
          </Link>
        </li>
      </ul>
      <div className="p-[12px] text-black text-[16px] border-solid border-2 border-slate-950 rounded-lg hover:text-white hover:bg-black">
        <Link to="/contact">Start A Project</Link>
      </div>
    </nav>
  );
};

export default Navbar;
