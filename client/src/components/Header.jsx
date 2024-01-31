import React from "react";
import Logo from "../../public/icon/logo.svg";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="  bg-[#F7F7F7] shadow-md ">
      <div className=" flex mx-auto p-3 justify-between items-center max-w-[1600px] ">
        <Link>
          <div className="flex items-center">
            <img src={Logo} alt="Logo" />
            <p className="hidden sm:inline font-semibold -ml-9">
              Department <br /> for Education
            </p>
          </div>
        </Link>

        <form className="bg-white p-3 rounded-lg flex items-center hover:border hover:border-[#509FEA]">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-24 sm:w-64 md:w-96"
            placeholder="Search..."
          />
          <button>
            <FaSearch className="text-[#555555]" />
          </button>
        </form>
        <ul className="flex gap-6 font-semibold text-xl">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/application">
            <li className="hidden sm:inline hover:underline">Application</li>
          </Link>
          <Link>
            <li>Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
