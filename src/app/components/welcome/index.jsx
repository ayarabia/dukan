"use client";
import React from "react";
import CustomeButton from "../customeButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import  "./style.css";
function Welcome() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const sliders=[1,2,3,4]
  return (
<div className="relative welcome ">
<Slider {...settings} className="mb-8">
  {sliders.map((item,index)=>{
    return (  <div key={index} className="bg-[#00A9A2] rounded-lg text-center text-white py-20">
    <p className="lg:text-6xl text-3xl text-bold mb-4">Flavours of Italy</p>
    <p className="text-xl font-normal mb-10 ">
      20% off weekly offer for italian products
    </p>

    <CustomeButton
      text="Shop Now"
      className="bg-primary text-white mx-auto"
    />
  </div>)
  })}
    </Slider>
</div>
  );
}

export default Welcome;
