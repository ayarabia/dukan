import React from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import map from "../images/map.svg";
import qr from "../images/qr.svg";
import vector from "../images/Vector.svg";
import notification from "../images/notification.svg";
import person from "../images/person.svg";
import favourite from "../images/favourite.svg";
import cart from "../images/cart.svg";
function NavBar() {
  const icons = [notification, person, favourite, cart];
  return (
    <div className=" justify-between  lg:flex hidden items-center ">
      <Image src={logo} alt="logo" />
      <div className="flex  items-center justify-between  px-[12px]  bg-[#fff] me-[10px] rounded-l-lg rounded-r-[20px] border border-[#B0B0B0]">
        <div className="flex items-center py-2">
          <Image src={search} alt="searchicon" className="w-[20px] h-[20px]" />
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search products"
            class="ms-2 bg-transparnt w-full placeholder:text-[#B0B0B0] text-sm font-medium"
          />
        </div>
        <Image src={qr} alt="qr" className="w-[20px] h-[20px]" />
      </div>
      <div className="flex items-center">
        <Image src={map} alt="map" />
        <div className="font-semibold text-sm ms-2">
          <p className="text-[#11111199]">Delivery to: </p>
          <p className="flex">
            Sulaimaniyah Dist, 455 Riyad Saud...
            <a href="#" className="text-primary">
              Change
            </a>
          </p>
          <p>(30-45 mins)</p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div className="bg-brightOrange rounded-br-lg px-2 py-1 ">
          <p className="text-xs font-normal text-[#070706]">Your Cashback</p>
          <p className="flex items-center text-xs font-bold text-[#070706] ">
            <Image src={vector} alt="arrow" className="w-[12px] me-2 h-[12px]" />
            SAR 124,00
          </p>
        </div>
        <div className="flex items-center justify-between">
          {icons.map((item) => {
            return (
              <Image
                src={item}
                alt="item"
                className="w-[24px] h-[24px] ms-6"
                key={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default NavBar;