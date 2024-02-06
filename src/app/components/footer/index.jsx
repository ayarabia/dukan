import React from "react";
import Image from "next/image";
import logofooter from "../../images/logofooter.svg";
import Facebook from "../../images/Facebook.svg";
import Instagram from "../../images/Instagram.svg";
import Snapchat from "../../images/Snapchat.svg";
import Express from "../../images/Express.svg";
import TikTok from "../../images/TikTok.svg";
import YouTube from "../../images/YouTube.svg";
import whatsApp from "../../images/whatsApp.svg";

import mastercard from "../../images/mastercard.svg";
import viza from "../../images/viza.svg";
import amricanExpress from "../../images/amricanExpress.svg";
import paypale from "../../images/paypale.svg";
import mada from "../../images/mada.svg";
import cash from "../../images/cash.svg";

import GooglePlay from "../../images/Google Play_bagde.svg";
import appelstore from "../../images/appelstore.svg";
import AppGallery from "../../images/AppGallery.svg";
function Footer() {
  const followUs = [Facebook, Instagram, Express, Snapchat, YouTube, TikTok];
  const about = [
    "About Us",
    "News",
    "Store locations",
    "Careers",
    "Sell with us",
  ];
  const support = ["Contact Us", "Returns & Exchanges", "Privacy Policy"];
  const services = [
    "Services & Warranty",
    "Terms & Conditions",
    "Shipping & Delivery ",
  ];
  const programs = ["Cashback programs", "Gift Cards", "Weekly Offers"];
  const paymentMethods = [
    mastercard,
    viza,
    amricanExpress,
    paypale,
  
  ];
  const downloads=[GooglePlay,appelstore,AppGallery]
  return (
 <div className="bg-[#272727] px-6 lg:px-3">
       <div className="grid md:grid-cols-4          grid-cols-1  container mx-auto py-4">
      <div >
        <Image alt="logofooter" src={logofooter} />
        <p className="text-[#FFFFFF80] font-medium text-base mt-6 mb-2">
          Follow us
        </p>
        <div className="flex items-center md:justify-start justify-between  mb-4">
          {followUs.map((item) => {
            return <Image key={item} alt={item} src={item} className="me-3" />;
          })}
        </div>
        <div className=" items-center  hidden lg:flex  ">
          <Image src={whatsApp} alt="Picture" />
          <p className="font-semibold text-base text-white ms-3 ">
          <a href="tel:+966 55 80 2 88 55"> 
            +966 55 80 2 88 55 </a>
          </p>
        </div>
      </div>
  <div className="flex justify-between lg:my-0 my-8">
  <div className="" >
        <p className="font-bold text-xs text-[#FFFFFF80]">About Company</p>
        {about.map((item) => {
          return (
            <a
              href="#"
              key={item}
              className="block mt-3 font-medium text-sm text-white"
            >
              {item}
            </a>
          );
        })}
      </div>
      <div >
        <p className="font-bold text-xs text-[#FFFFFF80]">Customer support</p>
        {support.map((item) => {
          return (
            <a
              href="#"
              key={item}
              className="block mt-3 font-medium text-sm text-white"
            >
              {item}
            </a>
          );
        })}
      </div>
  </div>
 <div  className="flex justify-between md:ps-8">
 <div >
        <p className="font-bold text-xs text-[#FFFFFF80]">Services</p>
        {services.map((item) => {
          return (
            <a
              href="#"
              key={item}
              className="block mt-3 font-medium text-sm text-white"
            >
              {item}
            </a>
          );
        })}
      </div>
      <divl className="">
        <p className="font-bold text-xs text-[#FFFFFF80]">Our programs</p>
        {programs.map((item) => {
          return (
            <a
              href="#"
              key={item}
              className="block mt-3 font-medium text-sm text-white"
            >
              {item}
            </a>
          );
        })}
      </divl>
 </div>
      <div className="hidden lg:block">
        <div className="text-sm font-semibold flex items-center justify-end">
          <p className="border-e-2 me-2 border-white text-[#FFFFFF80] p-2">
            AR
          </p>
          <p className="text-white">EN</p>
        </div>
        <p className="text-xs font-medium text-white mt-8 mb-4 text-right">
          Avaliable payment methods
        </p>
        <div className="flex items-center  justify-end">
          {paymentMethods.map((item) => {
            return <Image key={item} alt={item} src={item} className="me-4" />;
          })}

        </div>
      <div className="flex items-center justify-center mt-4 lg:ms-48">
         <Image  alt={mada} src={mada} className="me-4 " />
          <Image alt={cash} src={cash} className="me-4" />
      </div>
      </div>
    </div>
   <div className=" border-t border-[#555555] py-2">
   <div className="flex items-center md:justify-between justify-end container mx-auto flex-wrap">
        <p className="text-white mb-4">support@dukan.me</p>
        <div className="flex flex-wrap justify-end">
{downloads.map(item=>{return(
     <Image key={item} alt={item} src={item} className="me-4 mb-4" />
)})}
        </div>
    </div>
   </div>
 </div>
  );
}

export default Footer;
