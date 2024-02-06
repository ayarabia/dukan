import React from 'react'
import vector from "../images/vector.svg";
import arrow from "../images/arrow.svg";
import Image from "next/image";
function Links() {
    const links=["Top Deals","Fruits & Vegetables","Diary & Eggs","Beverages & Drinks","Fresh Bakery","Baby Products","Household  "]
  return (
    <div className=' items-center  lg:flex hidden  py-8'>
    <p className="flex items-center text-sm font-semibold text-[#070706] me-8 ">
        All categories
        <Image src={arrow} alt="arrow" className="w-[12px] ms-2 h-[12px]" />
          </p>
          <p className="flex items-center text-sm font-semibold text-[#070706] ">
            <Image src={vector} alt="vector" className="w-[12px] me-2 h-[12px]" />
            Highest cashaback           
          </p>
          {links.map(link=>{return (
            <p  key={link} className="flex items-center text-sm ms-10 font-semibold text-[#070706] ">
         {link}          
          </p>
          )})}
    </div>
  )
}

export default Links