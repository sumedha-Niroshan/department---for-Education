import React from "react";
import AdminSideMenu from "../components/AdminSideMenu";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import ApplicationView from "../components/ApplicationView";

export default function RejectApplication() {
  return (
    <div className="sm:flex">
      <div>
        <AdminSideMenu />
      </div>
      <div className="lg:mr-20 m-8 sm:w-full flex flex-col gap-6">
        <div className="lg:mr-20 m-8 sm:w-full flex flex-col gap-6">
          <div className="flex items-center gap-3 text-[#1C83E5] ">
            <DocumentTextIcon className="h-10 w-10" />
            <p className="text-[#1C83E5] text-3xl font-semibold">
              Rejected Applications
            </p>
          </div>
        </div>
       
        <ApplicationView />
      </div>
    </div>
  );
}
