import React from "react";
import { CartIcon } from "../icons";

const Header = ({ isScrolled }) => {
  return (
    <div
      className={`flex justify-between p-8 pb-12 bg-gradient-to-b from-black to-[rgba(0, 0, 0, 0.0)] fixed w-full z-10 ${
        isScrolled ? "transparent-background" : "text-white"
      }`}
    >
      <h1 className="text-lg font-extrabold">
        <span className="text-[#BFBEBE]">RIGHT</span>FIT.COM
      </h1>
      <nav className="w-1/2">
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
    </div>
  );
};

export default Header;
