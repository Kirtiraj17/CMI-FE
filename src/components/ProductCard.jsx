import React from "react";

const ProductCard = () => {
  return (
    <div className="cursor-pointer group">
      <div className="relative">
        <img
          src="/productImg.png"
          alt="productImg"
          className="bg-gray-300 aspect-[3/4]"
        />
        <div className="hidden group-hover:flex transition-all duration-300 absolute top-0 w-full h-full text-sm text-white font-bold justify-center items-center bg-black/80">
          Add to cart
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-lg font-medium">Autumn flower top</h2>
        <div className="mb-4">
          <span className="mr-3 text-sm font-bold">Black</span>
          <span>Cotton</span>
        </div>
        <p className="text-[#5A112B] text-sm">INR 1499.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
