import React, { useState } from "react";
import {
  HomeIcon,
  DocumentTextIcon,
  DocumentArrowUpIcon,
  DocumentArrowDownIcon,
  PencilSquareIcon,
  ArrowRightStartOnRectangleIcon,
  BarsArrowUpIcon,
  BarsArrowDownIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function AdminSideMenu() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="">
      <div className={`sm:flex ${showSidebar ? "" : "hidden"}`}>
        <ul className="text-[#555555] bg-[#EFEFEF] p-7 px-10 gap-10 flex flex-col text-2xl font-semibold">
          <Link to="/admin-dashbord" className="hover:text-[#1C83E5]">
            <li className="flex items-center gap-3">
              <HomeIcon className="h-10 w-10 " />
              <span>Dashbord</span>
            </li>
          </Link>

          <Link to="/admin-application" className=" hover:text-[#1C83E5]">
            <li className="flex items-center  gap-3">
              <DocumentTextIcon className="h-10 w-10" />
              <span> Applications</span>
            </li>
          </Link>

          <Link  to="/admin-accept-aplication" className="hover:text-[#1C83E5]">
            <li className="flex items-center gap-3">
              <DocumentArrowUpIcon className="h-10 w-10" />
              <span>
                Accept <br /> Applications
              </span>
            </li>
          </Link>
          <Link to="/admin-reject-aplication" className="hover:text-[#1C83E5]">
            <li className="flex items-center gap-3">
              <DocumentArrowDownIcon className="h-10 w-10" />
              <span>
                Reject <br /> Applications
              </span>
            </li>
          </Link>

          <Link to="/create-school-profile" className="hover:text-[#1C83E5]">
            <li className="flex items-center gap-3">
              <PencilSquareIcon className="h-10 w-10" />
              <span> Create Profile</span>
            </li>
          </Link>

          <Link className="hover:text-[#1C83E5]">
            <li className="flex items-center gap-3 ">
              <ArrowRightStartOnRectangleIcon className="h-10 w-10" />
              <span className="hover:text-[#1C83E5]">Sign out</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleSidebar}>
          {showSidebar ? (
            <div className="bg-[#1C83E5] text-white flex gap-3 text-xl p-3 rounded-lg my-8 mx-10">
              <BarsArrowUpIcon className="h-6 w-6 " /> <span>Hide menu</span>
            </div>
          ) : (
            <div className="bg-[#1C83E5] text-white flex gap-3 text-xl p-3 rounded-lg my-8 mx-10">
              <BarsArrowDownIcon className="h-6 w-6 " /> <span>Show menu</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
