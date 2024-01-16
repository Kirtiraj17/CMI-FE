import React, { Fragment } from "react";
import CartItem from "./CartItem";
import { CartIcon } from "../icons";

const CartPanel = ({
  isCartOpen,
  setIsCartOpen,
  cartItems,
  setCartItems,
}) => {
  const handleCartItemRemove = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    updatedCartItems.length <= 0 && setIsCartOpen(false);
  };

  return (
    <div
      className={`fixed top-0 ${
        isCartOpen ? "right-0" : "-right-1/2"
      } w-[516px] h-screen bg-gray-200 z-20 transition-all duration-500 overflow-y-auto`}
    >
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
          <li className="flex ml-11" onClick={() => setIsCartOpen(false)}>
            <CartIcon className="cursor-pointer" />
            <span className="ml-4">{cartItems?.length}</span>
          </li>
        </ul>
      </nav>
      <div className="px-10">
        <p className="text-lg font-medium mb-7">Shopping Cart</p>
        <ul>
          {cartItems?.map((cartItem) => (
            <Fragment key={cartItem?.id}>
              <CartItem
                cartItem={cartItem}
                handleCartItemRemove={() => handleCartItemRemove(cartItem?.id)}
              />
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartPanel;
