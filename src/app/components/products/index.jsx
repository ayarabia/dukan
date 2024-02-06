"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Image from "next/image";
import image from "../../images/image1.svg";
function Productes() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const sliderSettings = {
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
  const cards = [
    {
      imageSrc: image,
      title: "Highest cashback",
    },
    {
      imageSrc: image,
      title: "Top Deals",
    },
    {
      imageSrc: image,
      title: "Fruits & vegetables",
    },
    {
      imageSrc: image,
      title: "Diary &  Eggs",
    },
    {
      imageSrc: image,
      title: "Cold Beverages ",
    },
    {
      imageSrc: image,
      title: "Fresh Bakery",
    },
    {
      imageSrc: image,
      title: "Frozen Food",
    },
    {
      imageSrc: image,
      title: "Grocery",
    },
    {
      imageSrc: image,
      title: "Baby Products",
    },
    {
      imageSrc: image,
      title: "Fresh Bakery",
    },
    {
      imageSrc: image,
      title: "Frozen Food",
    },
    {
      imageSrc: image,
      title: "Grocery",
    },
    {
      imageSrc: image,
      title: "Baby Products",
    },
  ];
  return (
    <div className="slider-container">
      <div className="controls relative">
        <button onClick={previous} className="prev absolute  ">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="next absolute">
          <FaChevronRight />
        </button>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...sliderSettings}
      >
        {cards.map((card, index) => (
          <div key={index} className="px-8">
            <Image
              alt={card.title}
              src={card.imageSrc}
              width="100"
              height="100"
              className="mx-auto"
            />
            <p className="font-semibold  text-sm text-center">{card.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Productes;