import React from "react";
import CustomeButton from "../customeButton";
import Image from "next/image";
import banar from "../../images/banar.svg";
function Info() {
  return (
    <div className="bg-[#007460]  px-10 py-8 rounded-lg my-8 relative">
      <p className="text-2xl font-bold text-white md:w-1/2 lg:pe-16">
        Return up to 30% of the product cost by getting cashback on each order!
      </p>
      <CustomeButton
        text="Learn More"
        className="bg-white text-primary border mt-5 border-primary"
      />
      <Image
        alt="banar"
        src={banar}
        className="absolute bottom-0 right-[35px] hidden md:block "
        width={290}
        height={115}
      />
    </div>
  );
}

export default Info;
