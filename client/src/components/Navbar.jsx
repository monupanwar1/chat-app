import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center top-0 justify-between fixed w-full h-10 p-2 bg-gray-800 bg-opacity-20 backdrop-filter backdrop-blur-lg">
      <h1 className="font-semibold text-white">FireChat</h1>
      <ul className="items-center justify-center px-2 sm:px-10 flex gap-6 font-semibold text-black/60 h-full">
        <li>
          <Link to="/" className="hover:text-black transition scale-105 hover:border-b-2 border-rose-500" aria-label="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-black hover:border-b-2 border-rose-500" aria-label="About">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
