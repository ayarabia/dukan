import React from "react";
import CustomeButton from "../customeButton";

function Timers() {
  return (
    <div className="bg-[#004837] rounded-lg py-12  text-center px-4">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex">
            <p className="bg-primary text-white p-3 font-bold lg:text-6xl text-4xl flex items-center  rounded me-1">
              3
            </p>
            <p className="bg-primary text-white p-3 font-bold lg:text-6xl text-4xl flex items-center rounded me-3">
              2
            </p>
          </div>
          <p className="text-white mt-2">hours</p>
        </div>
        <span className="text-white block -mt-4">:</span>
        <div className="flex flex-col items-center">
        <div className="flex">
        <p className="bg-primary text-white p-3 font-bold lg:text-6xl text-4xl flex items-center rounded me-1 ms-3">
          1
        </p>
        <p className="bg-primary text-white p-3 font-bold lg:text-6xl text-4xl flex items-center rounded me-1">
          8
        </p>
        </div>  
        <p className="text-white mt-2">minutes</p>          
        </div>
      </div>
      <p className="text-primary text-2xl font-bold mt-8">
        -40% on all Personal Care products
      </p>
      <p className="text-white  text-sm font-normal my-4">
        *Some explanation small text if needed displayed here. Lorem ipsum dolor
        sit amet,
        <br /> consectetur adipiscing elit. Donec lobortis egestas mi
      </p>
      <CustomeButton text="Shop Now" className="bg-primary text-white mt-5" />
    </div>
  );
}

export default Timers;
