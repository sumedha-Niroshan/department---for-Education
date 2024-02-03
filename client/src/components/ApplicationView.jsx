import React from "react";

const data = [
  {
    no: "01",
    name: "kamal perera",
    previousschool: "Royal college",
    steam:" Maths",
    zonal: "colombo",
  },
  {
    no: "02",
    name: "kamal perera",
    previousschool: "Royal college",
    steam:" Maths",
    zonal: "colombo",
  },
  {
    no: "03",
    name: "kamal perera",
    previousschool: "Royal college",
    steam:" Maths",
    zonal: "colombo",
  },
];

export default function ApplicationView() {
  return (
    <table class="table-auto">
      <tbody className="">
        <tr className="font-semibold border-black border-b-2 ">
          <td className="">No</td>
          <td>Name</td>
          <td className="hidden md:inline-block" >Previous School</td>
          <td className="">Steam</td>
          <td className="hidden md:inline-block">Zonal</td>
          <td>Option</td>
        </tr>
        {data.map((val) => (
          <tr key={val.no} className="bg-white border-[#509FEA] border-b-2 ">
            <td >{val.no}</td>
            <td >{val.name}</td>
            <td className="hidden md:inline-block">{val.previousschool}</td>
            <td className="">{val.steam}</td>
            
            <td className="hidden sm:inline-block sm:py-3">{val.zonal}</td>
            <td >
              <button className="bg-[#1C83E5] text-white px-4 py-1 my-2 rounded-lg ">
                view
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
