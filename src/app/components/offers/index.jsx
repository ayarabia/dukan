"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomeButton from "../customeButton";
function Offers() {
  const offersData = [
    {
      titel: "Up to 50% discount",
      subTitel: "Household Essentials",
      color: "blue",
    },
    {
      titel: "Vitamins time! -30%",  subTitel: "Fruints & Vegetables",  color: "green",
    },
    { titel: "Only in Dukan ", subTitel: "Specials", color: "secondary" },
  ];
  console.log(offersData);
  let sliderRef = useRef(null);
  const next = () => {
    console.log("next");
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
  };
  return (
    <div className="my-16 highestCashback ps-[85px]  ">
      <p className="text-[20px] font-semibold mb-5 text-center">
        This week offers
      </p>
      <div className="controls relative ">
        <button
          onClick={previous}
          className="prev absolute border-2 border-[#b0b0b0] p-1 rounded "
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="next absolute border-2 border-[#00a9a2] p-1 rounded"
        >
          <FaChevronRight />
        </button>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...sliderSettings}
      >
        {offersData.map((card, index) => (
 
            <div
            className={`bg-${card.color}  text-white py-20 px-16  `}
            key={index}
          >
            <p className="text-3xl text-bold mb-4">
            {card.titel}
            </p>
            <p className="text-xl text-normal mb-4">
            {card.subTitel}
            </p>
            <CustomeButton
              text="Shop Now"
              className="bg-primary text -white border border-primary "
            />
          </div>
    
        ))}
      </Slider>
    </div>
  );
}
export default Offers;
