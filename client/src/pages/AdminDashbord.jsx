import React from "react";
import AdminSideMenu from "../components/AdminSideMenu";
import Dashbordicon from "../assets/icon-1.png";
import { DocumentTextIcon, CalendarIcon } from "@heroicons/react/24/solid";
import CheckedIcon from "../assets/icon-3.png";
import WaitingIcon from "../assets/icon-2.png";
import ApplicationView from "../components/ApplicationView";

export default function AdminDashbord() {
  return (
    <div className=" sm:flex">
      <div>
        <AdminSideMenu />
      </div>
      <div className="lg:mr-20 m-8 sm:w-full flex flex-col gap-6">
        <div className="flex items-center gap-3 ">
          <img src={Dashbordicon} alt="dashbord" className="w-7 h-7" />
          <p className="text-[#1C83E5] text-3xl font-semibold">Dashboard</p>
        </div>
        <div className="flex  flex-col sm:flex-row justify-between gap-5 lg:gap-12 ">
          <div className="flex flex-col justify-center items-center bg-white p-2 lg:px-16 lg:py-8 gap-3 sm:w-1/3  rounded-lg">
            <DocumentTextIcon className="h-10 w-10 text-[#555555]" />
            <p className="text-[#555555] text-xl lg:text-3xl">
              Total Application
            </p>
            <p className="text-5xl font-bold">350</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white p-2 lg:px-16 sm:w-1/3  lg:py-8 gap-3 rounded-lg">
            <img src={CheckedIcon} alt="icon" className="w-8 h-8" />
            <p className="text-[#555555] text-xl lg:text-3xl">
            Checked
            </p>
            <p className="text-5xl font-bold">200</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white lg:px-16 sm:w-1/3  lg:py-8 p-2 gap-3 rounded-lg">
            <img src={WaitingIcon} alt="icon" className="w-8 h-8" />
            <p className="text-[#555555] text-xl lg:text-3xl">
            Waiting
            </p>
            <p className="text-5xl font-bold">150</p>
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <CalendarIcon className="h-8 w-8 text-[#1C83E5]" />
          <p className="text-[#1C83E5] text-3xl font-semibold">
            Last Recent Application
          </p>
        </div>
        <div className="flex justify-between text-lg font-semibold border-black border-b-2 px-5">
            <p>NO</p>
            <p>Name</p>
            <p className="hidden md:inline">Previous  School</p>
            <p  className="hidden lg:inline">Zonal</p>
            <p>Option</p>
        </div>
        <ApplicationView/>
      </div>
    </div>
  );
}
