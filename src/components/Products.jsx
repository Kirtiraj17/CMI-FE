import React from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const Products = () => {
  return (
    <div>
      {/* <div className="mb-7">
        <ul className="flex">
          <li className="font-bold py-2 px-3 mr-4 bg-gray-300 w-max cursor-pointer transition-all hover:bg-gray-400">
            <span className="mr-2">Cotton</span>
            <span>X</span>
          </li>
        </ul>
      </div> */}

      <div className="flex flex-wrap justify-start gap-x-14 gap-y-11">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Pagination />
    </div>
  );
};

export default Products;
