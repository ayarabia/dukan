"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../productCard";
function TopDeals(props) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const topDeals = props.topDeals;
  return (
    <div className="my-16 highestCashback">
      <p className="text-[20px] font-semibold mb-5 lg:ps-0 ps-4">Top Deals</p>
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
        {topDeals?.map((card, index) => (
          <div key={index}>
            {" "}
            <ProductCard card={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default TopDeals;