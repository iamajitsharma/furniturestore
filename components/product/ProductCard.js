import React from "react";
import Image from "next/image";
import { Star } from "react-feather";

const ProductCard = ({ data }) => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-6 h-full rounded-2xl relative">
      <span className="flex justify-start self-start bg-primary text-white text-sm px-2 py-1 rounded-md">
        -17%
      </span>
      <Image src={data.image} alt="" width={800} height={800} />
      <div className="flex flex-col gap-3 py-4">
        <h4 className="text-sm sm:text-base">{data.productName}</h4>
        <span className="flex items-center justify-center w-full">
          <Star size={18} fill="#FFB128" stroke="#FFB128" />
          <Star size={18} fill="#FFB128" stroke="#FFB128" />
          <Star size={18} fill="#FFB128" stroke="#FFB128" />
          <Star size={18} fill="#FFB128" stroke="#FFB128" />
          <Star size={18} fill="#FFB128" stroke="#FFB128" />
        </span>
        <h6 className="text-black text-center font-semibold">${data.price}</h6>
      </div>
    </div>
  );
};

export default ProductCard;
