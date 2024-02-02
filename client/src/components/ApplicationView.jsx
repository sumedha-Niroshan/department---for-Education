import React from 'react'

const data = [
    {
        no: "01",
        name: "kamal perera",
        previousschool: "Royal college",
        zonal: "colombo",
    },
    {
        no: "02",
        name: "kamal perera",
        previousschool: "Royal college",
        zonal: "colombo",
    },
    {
        no: "03",
        name: "kamal perera",
        previousschool: "Royal college",
        zonal: "colombo",
    }
]

export default function ApplicationView() {
    return (
        <>
            {
                data.map((user) => (
                    <div key={user.no} className='flex justify-between items-center px-5 bg-white p-2 rounded-lg font-semibold'>
                        <p>{user.no}</p>
                        <p>{user.name}</p>
                        <p className="hidden md:inline">{user.previousschool}</p>
                        <p  className="hidden lg:inline">{user.zonal}</p>
                        <button className='bg-[#1C83E5] text-white py-2 px-4 rounded-lg'>view</button>
                    </div>
                ))
            }
        </>
    )
}
