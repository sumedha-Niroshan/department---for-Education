import React from "react";
import AdminSideMenu from "../components/AdminSideMenu";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import MathsIcon from "../assets/maths.png";
import BioIcon from "../assets/bio.png";
import ComIcon from "../assets/com.png";
import ArtIcon from "../assets/art.png";
import TechIcon from "../assets/tech.png";

export default function AdminApplication() {
  return (
    <div className=" sm:flex">
      <div>
        <AdminSideMenu />
      </div>
      <div className="lg:mr-2 m-8 sm:w-full flex flex-col gap-6 bordedr border-red-700">
        <div className="flex items-center gap-3 text-[#1C83E5] ">
          <DocumentTextIcon className="h-10 w-10" />
          <p className="text-[#1C83E5] text-3xl font-semibold">Applications</p>
        </div>
        <div className="flex  flex-col sm:flex-row  gap-5 lg:gap-12 sm:flex-wrap ">
          <div className="flex flex-col justify-center items-center bg-white p-2 lg:px-10 lg:py-12 gap-3 sm:w-1/4  rounded-lg">
            <img src={MathsIcon} alt="icon" className="w-8 h-12" />
            <p className="text-[#555555] text-xl lg:text-3xl">
              Physical Science
            </p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-2 lg:px-10 sm:w-1/4  lg:py-12 gap-3 rounded-lg">
            <img src={BioIcon} alt="icon" className="w-8 h-12" />
            <p className="text-[#555555] text-xl lg:text-3xl">Bio Science</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white lg:px-10 sm:w-1/4  lg:py-12 p-2 gap-3 rounded-lg">
            <img src={ComIcon} alt="icon" className="w-10 h-12" />
            <p className="text-[#555555] text-xl lg:text-3xl">Commerce</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white lg:px-10 sm:w-1/4  lg:py-12 p-2 gap-3 rounded-lg">
            <img src={ArtIcon} alt="icon" className="w-12 h-12" />
            <p className="text-[#555555] text-xl lg:text-3xl">Art</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white lg:px-10 sm:w-1/4  lg:py-12 p-2 gap-3 rounded-lg">
            <img src={TechIcon} alt="icon" className="w-12 h-12" />
            <p className="text-[#555555] text-xl lg:text-3xl">Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}
