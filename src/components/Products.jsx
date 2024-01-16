import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import useFetchData from "../customHooks/useFetchData";
import { PRODUCTS_URL } from "../constants/apiUrls";

const Products = ({ products, loading, materials, colors, setCartItems, setIsCartOpen }) => {
//   const [products, setProducts] = useState([]);

//   const { data, error, loading } = useFetchData(PRODUCTS_URL);

//   useEffect(() => {
//     setProducts(data?.products);
//   }, [data]);

  // console.log(products, 'in products', data);

  return (
    <div className="w-4/5">
      {/* <div className="mb-7">
        <ul className="flex">
          <li className="font-bold py-2 px-3 mr-4 bg-gray-300 w-max cursor-pointer transition-all hover:bg-gray-400">
            <span className="mr-2">Cotton</span>
            <span>X</span>
          </li>
        </ul>
      </div> */}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-start gap-x-14 gap-y-11">
          {products?.map((product) => (
            <Fragment key={product?.id}>
              <ProductCard
                product={product}
                materials={materials}
                colors={colors}
                setCartItems={setCartItems}
                setIsCartOpen={setIsCartOpen}
              />
            </Fragment>
          ))}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Products;
