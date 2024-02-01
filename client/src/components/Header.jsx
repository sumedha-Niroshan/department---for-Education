import React from "react";
import Logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="  bg-[#F7F7F7] shadow-md ">
      <div className=" flex mx-auto p-3 justify-between items-center max-w-[1600px] ">
        <Link>
          <div className="flex items-center justify-center">
            <img src={Logo} alt="Logo" className="w-10 h-10"/>
            <p className="hidden text-xs sm:inline font-semibold pt-2 ">
              Department <br /> for Education
            </p>
          </div>
        </Link>

        <form className="bg-white p-3 max-w-lg rounded-lg flex items-center hover:border hover:border-[#509FEA]">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24 sm:w-64 md:w-96"
            placeholder="Search..."
          />
          <button>
            <FaSearch className="text-[#555555]" />
          </button>
        </form>
        <ul className="flex gap-6 font-semibold text-base  md:text-xl items-center">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/application">
            <li className="hidden  hover:underline">Application</li>
          </Link>
          <Link to='/sign-up'>
            <li className="bg-[#1C83E5] px-4 py-1 text-white rounded-lg ">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
