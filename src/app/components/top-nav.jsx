import React from "react";
import Image from "next/image";
import delivery from "../images/delivery.svg";
import stores from "../images/stores.svg";
import cashback from "../images/cashback.svg";
import whatsApp from "../images/whatsApp.svg";
function TopNav() {
  const features = [
    {
      image: delivery,
      text: "Fast Delivery & Free delivery",
    },
    {
      image: stores,
      text: "+ 500 offline stores with high quality products",
    },
    {
      image: cashback,
      text: "Save more by returning cashback for each order",
    },
  ];
  return (

      <div className=" grid-cols-2  py-5  lg:grid hidden ">
        <div className="flex ">
          {features.map((feature) => {
            return (
              <div className="flex items-center justify-center me-3.5 " key={feature.text}>
                <Image src={feature.image} alt="Picture" />
                <p className="font-semibold text-xs ms-2 line-clamp-2">{feature.text}</p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-end ">
      <div className="text-sm font-semibold flex items-center">
        <p className="border-e-2 me-2 border-[#070706]  p-2">AR</p>
        <p>EN</p>
      </div>
      <div className="flex items-center justify-end ms-8 ">
                <Image src={whatsApp} alt="Picture" />
                <p className="font-semibold text-base ms-2 "> +966 55 80 2 88 55</p>
              </div>
        </div>
      </div>
    
  );
}

export default TopNav;
