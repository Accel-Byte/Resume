import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="md:flex justify-between lg:px-40 md:px-24 py-10 text-custom-white-title">
        <div className="py-6 px-2 text-center">
          <h1 className="font-thailand text-3xl">
            <Link to="/">Cheris Patel</Link>
          </h1>
        </div>
        <ul className="flex justify-around font-raleway font-semibold py-6">
          <li className="px-4 hover:text-primary">
            <Link to="/#about-me">About</Link>
          </li>
          <li className="px-4 hover:text-primary">
            <Link to="/#work">Work</Link>
          </li>
          <li className="px-4 hover:text-primary">
            <Link to="/experience">Experience</Link>
          </li>
          <li className="px-4 hover:text-primary">
            <Link to="/education"> Education </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
