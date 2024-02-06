import React from "react";
import CustomeButton from "../customeButton";
import Image from "next/image";
import gift from "../../images/gifts.svg";
function Gifts() {
  return (
    <div className="bg-[#D5F07D]  ps-10 pb-8 pt-20 rounded-lg my-8 relative">
      <p className="text-2xl font-bold text-dark lg:w-1/4 ">
        Take care just like that with Dukan gift cards
      </p>
      <CustomeButton
        text="Learn More"
        className="bg-secondary text-white  mt-5 "
      />
      <div className="text-sm mt-12">
        <p>*Some explanation small text if needed displayed here. </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          lobortis egestas mi
        </p>
      </div>
      <Image
        alt="gift"
        src={gift}
        className="absolute bottom-0 -right-20 top-0  h-full hidden lg:block"
      />
    </div>
  );
}

export default Gifts;
