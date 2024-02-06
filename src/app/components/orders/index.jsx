import React from "react";
import CustomeButton from "../customeButton";
function Orders() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  my-12 ">
      <div className="bg-[#A092E0]  text-white py-20 px-16">
        <p className="text-3xl text-bold mb-4">
          Easier shopping with online fast delivery. Meet new feature!
        </p>
        <CustomeButton
          text="Shop Now"
          className="text-primary bg-white border border-primary "
        />
      </div>
      <div className="bg-[#D5F07D] text-center py-20">
        <p className="text-3xl text-bold mb-4">Seasonal offers</p>
        <CustomeButton
          text="Shop Now"
          className="bg-primary text-white border border-primary mx-auto "
        />
      </div>
    </div>
  );
}
export default Orders;