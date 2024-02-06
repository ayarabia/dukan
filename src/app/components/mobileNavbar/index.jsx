import React from "react";
import Image from "next/image";
import logo from "../../images/logofooter.svg";
import menu from "../../images/menu-line.svg";
import cart from "../../images/shoppingCart.svg";
import vector from "../../images/Vector.svg";
import search from "../../images/search.svg";
import qr from "../../images/qr.svg";
import notification from "../../images/notification.svg";
import { RiNotification2Line } from "react-icons/ri";
function MobileNavbar() {
  return (
    <div className="bg-secondary container mx-auto py-6 px-6">
      <div className=" flex items-center justify-between">
        <div className="flex items-center">
         <Image src={menu} alt="menu" className="me-3" />
          <Image src={logo} alt="logo" height={32} />
        </div>
        <div className="flex items-center">
          <div className="bg-brightOrange rounded-br-lg px-2 py-1 me-3">
            <p className="flex items-center text-xs font-bold text-[#070706] ">
              <Image
                src={vector}
                alt="arrow"
                className="w-[12px] me-2 h-[12px]"
              />
              SAR 124,00
            </p>
          </div>
          <Image src={cart} alt="cart" />
        </div>
      </div>
      <div className=" flex items-center justify-between mt-3         ">
      <div className="flex  items-center justify-between  px-[12px] py-2 bg-[#fff] me-[10px] rounded-l-lg rounded-r-[20px] border border-[#B0B0B0]">
        <div className="flex items-center">
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
    
              <RiNotification2Line  className="text-xl text-white"/>
      </div>
    </div>
  );
}

export default MobileNavbar;
