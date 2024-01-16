import React from "react";

const Footer = () => {
  return (
    <div className="text-white bg-[#1E1E1E] px-12 pt-11 pb-7">
      <div className="text-lg font-extrabold mb-7">
        <span className="text-[#BFBEBE]">RIGHT</span>FIT.COM
      </div>
      <div className="flex justify-between text-sm">
        <ul className="text-sm">
          <li className="mb-2">
            <a href="#">Home</a>
          </li>
          <li className="my-2">
            <a href="#">All Products</a>
          </li>
          <li className="my-2">
            <a href="#">Featured Products</a>
          </li>
          <li className="my-2">
            <a href="#">About Us</a>
          </li>
          <li className="my-2">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="w-1/2">
          <p className="mb-5">
            We are a registered E-Commerce seller and we support a variety of
            Local and International payment modes
          </p>
          <div>
            <img src="/footer-icons.png" alt="footer-icons" />
          </div>
        </div>
        <div>
          <p className="mb-5">Website protected by</p>
          <img src="/digicert.png" alt="digicert" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
