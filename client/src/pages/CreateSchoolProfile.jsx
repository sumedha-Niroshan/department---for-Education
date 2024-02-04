import React from "react";
import AdminSideMenu from "../components/AdminSideMenu";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

export default function CreateSchoolProfile() {
  return (
    <div className="sm:flex ">
      <div className=" border border-black">
        <AdminSideMenu />
      </div>
      <div className="sm:pr-20 m-3 sm:m-8 sm:w-full flex flex-col gap-6 border border-black">
       
          <div className="flex items-center gap-3 text-[#1C83E5] ">
            <PencilSquareIcon className="h-10 w-10" />
            <p className="text-[#1C83E5] text-3xl font-semibold">
              Create school profile
            </p>
          </div>
          <div className="gap-4 flex flex-col border border-black">
            <div className="flex flex-col w-full">
              <label className="text-[#555555]">
                School name <span className="text-[#E73636]">*</span>
              </label>
              <input
                type="text"
                className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                id="schoolname"
              />
            </div>
            <div className="sm:flex sm:gap-4 sm:justify-between">
              <div className="flex flex-col w-full ">
                <label className="text-[#555555]">
                  Address <span className="text-[#E73636]">*</span>
                </label>
                <input
                  type="text"
                  className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                  id="address"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[#555555]">
                  Educational Zonal<span className="text-[#E73636]">*</span>
                </label>
                <input
                  type="text"
                  className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                  id="zonal"
                />
              </div>
            </div>
            <div className="sm:flex sm:gap-4 sm:justify-between">
              <div className="flex flex-col w-full ">
                <label className="text-[#555555]">
                  School type<span className="text-[#E73636]">*</span>
                </label>
                <select
                  defaultValue={"mix"}
                  id="sort_order"
                  className="focus:outline-none p-3.5  border-[#509FEA] border rounded-lg  "
                >
                  <option value={"mix"}>Mix school</option>
                  <option value={"boys"}>Boys school</option>
                  <option value={"girls"}>Girls school</option>
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[#555555]">
                  Total teachers <span className="text-[#E73636]">*</span>
                </label>
                <input
                  type="text"
                  className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                  id="zonal"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-[#555555]">
                  Total Student <span className="text-[#E73636]">*</span>
                </label>
                <input
                  type="text"
                  className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                  id="zonal"
                />
              </div>
            </div>
            <p className="text-xl font-semibold text-[#555555]">
              Available stream{" "}
            </p>
            <div className="flex flex-wrap gap-7 lg:gap-20">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#509FEA] "
                />
                <label className="text-[#555555]">Physical science</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#509FEA] "
                />
                <label className="text-[#555555]">Bio science</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#509FEA] "
                />
                <label className="text-[#555555]">Commerce</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#509FEA] "
                />
                <label className="text-[#555555]">Art</label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-6 h-6 border border-[#509FEA] "
                />
                <label className="text-[#555555]">Technology </label>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#555555]">
                Description <span className="text-[#E73636]">*</span>
              </label>
              <textarea
                type="text"
                className="focus:outline-none p-3  border-[#509FEA] border rounded-lg "
                id="schoolname"
              />
            </div>
            <p className="text-xl font-semibold text-[#555555]">
              Upload school image
            </p>
            <p className="  text-[#555555]">
             Frist image will be cover
            </p>
            <div className="flex gap-4 p-3 bg-white rounded-lg">
              <input
                type="file"
                id="image"
                accept="image/*"
                multiple
                className="p-3 border border-gray-300 rounded w-full"
              />
              <button
                type="button"
                className="bg-[#1C83E5] text-white p-3 rounded-lg "
              >
                Upload
              </button>
            </div>
            <div className="flex justify-end mt-7">
              <button
                type="button"
                className="bg-[#1C83E5] text-white p-3 px-6 rounded-lg "
              >
                Update
              </button>
            </div>
          
        </div>
      </div>
    </div>
  );
}
