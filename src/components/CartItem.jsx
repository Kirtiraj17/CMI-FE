import React from "react";

const CartItem = ({ cartItem, handleCartItemRemove }) => {
  return (
    <li className="flex mb-4">
      <div className="mr-5 w-1/2">
        <img
          src={cartItem?.image || "/productImg.png"}
          alt="productImg"
          className="bg-white aspect-[3/4]"
        />
      </div>
      <div className="pt-4">
        <h2 className="text-lg font-medium">{cartItem?.name}</h2>
        <div className="mb-4">
          <span className="mr-3 text-sm font-bold text-[#4F4733]">Black</span>
          <span className="text-[#4F4733]">Cotton</span>
        </div>
        <p className="text-[#5A112B] text-sm mb-5">{`INR ${cartItem?.price}.00`}</p>
        <div
          className="font-bold py-2 px-3 mr-4 text-white bg-[#3F3737] w-max cursor-pointer transition-all hover:bg-gray-500"
          onClick={handleCartItemRemove}
        >
          <span className="mr-2">Remove</span>
          <span>X</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
