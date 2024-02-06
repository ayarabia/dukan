import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import Image from "next/image";
import topdeal from "../../images/topdeal.svg";
import CustomeButton from "../customeButton";
import vector from "../../images/Vector.svg";
import menu from "../../images/menu.svg";
import Rating from "../rating";
function ProductCard(props) {
  const product=props.card
  console.log(props.card.image);
  return (
    <div className="bg-white mx-4 text-center md:text-left" >
      <div className="flex items-center justify-between">
        <div className="bg-lightOrange rounded-br-lg px-2 py-1 ">
          <p className="flex items-center text-base font-medium text-white ">
            <Image
              src={topdeal}
              alt="topdeal"
              className="w-[12px] me-1 h-[12px]"
            />
            Top deal
          </p>
        </div>
        <IoIosHeartEmpty className="text-[#007460] text-2xl" />
      </div>
      <img src={product?.image} alt="product" className="my-3 md:mx-0 mx-auto" width={220}  style={{height:"220px"}} />
      <CustomeButton
        text="+"
        className="text-white bg-secondary  py-1 rounded-s rounded-e-lg"
      />
      <div className="flex items-center justify-center md:justify-start  flex-wrap">
        <Rating />
        <div className="bg-brightOrange rounded-br-lg px-2 py-2 mx-2  ">
          <p className="flex items-center text-xs font-medium text-[#070706] whitespace-nowrap ">
            <Image
              src={vector}
              alt="arrow"
              className="w-[12px] me-1 h-[12px]"
            />
         <span>   SAR {product.price}</span>
          </p>
        </div>
        <Image src={menu} alt="menu" />
      </div>
      <div className="text-sm">
        <p className="font-bold">{product.price} SAR</p>
        <p>Pasta Reggia — Penne ziti, 500g</p>
        <p>More information</p>
      </div>
    </div>
  );
}

export default ProductCard;
