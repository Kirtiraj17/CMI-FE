import React from "react";
import { CartIcon } from "../icons";

const CartPanel = () => {
  return (
    <div className="fixed top-0 -right-1/2 w-[516px] h-screen bg-gray-200 z-20 transition-all duration-500 overflow-y-auto">
      <nav className="p-8 pb-12">
        <ul className="flex justify-end">
          <li>
            <a
              href="#"
              className="font-light transition-all hover:font-bold active"
            >
              All Products
            </a>
          </li>
          <li className="ml-11">
            <a href="#" className="font-light transition-all hover:font-bold ">
              Featured Products
            </a>
          </li>
          <li className="flex ml-11">
            <CartIcon className="cursor-pointer" />
            <span className="ml-4">0</span>
          </li>
        </ul>
      </nav>
      <div className="px-10">
        <p className="text-lg font-medium mb-7">Shopping Cart</p>
        <ul>
          <li className="flex mb-4">
            <div className="mr-5 w-1/2">
              <img
                src="/productImg.png"
                alt="productImg"
                className="bg-white aspect-[3/4]"
              />
            </div>
            <div className="pt-4">
              <h2 className="text-lg font-medium">Autumn flower top</h2>
              <div className="mb-4">
                <span className="mr-3 text-sm font-bold text-[#4F4733]">
                  Black
                </span>
                <span className="text-[#4F4733]">Cotton</span>
              </div>
              <p className="text-[#5A112B] text-sm mb-5">INR 1499.00</p>
              <div className="font-bold py-2 px-3 mr-4 text-white bg-[#3F3737] w-max cursor-pointer transition-all hover:bg-gray-500">
                <span className="mr-2">Remove</span>
                <span>X</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartPanel;
