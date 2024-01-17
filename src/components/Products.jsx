import React, { Fragment, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const PRODUCT_PER_PAGE = 6;

const Products = ({
  products,
  loading,
  materials,
  colors,
  setCartItems,
  setIsCartOpen,
  filters,
  handleRemoveFilter,
  setActiveMaterial,
  setActiveColor,
}) => {
  const [activePage, setActivePage] = useState(1);
  const pages = Math.ceil(products?.length / PRODUCT_PER_PAGE);

  return (
    <div className="w-4/5">
      {filters?.length > 0 && (
        <div className="mb-7">
          <ul className="flex">
            {filters?.map((filter) => (
              <li
                key={filter?.name}
                className="font-bold py-2 px-3 mr-4 bg-gray-300 w-max cursor-pointer transition-all hover:bg-gray-400"
                onClick={() => {
                  handleRemoveFilter(filter?.name, null);
                  filter?.type === "material"
                    ? setActiveMaterial(false)
                    : filter?.type === "color"
                    ? setActiveColor(false)
                    : null;
                }}
              >
                <span className="mr-2">{filter?.name}</span>
                <span>X</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-start gap-x-14 gap-y-11">
          {products?.length > 0 ? (
            products?.map((product) => (
              <Fragment key={product?.id}>
                <ProductCard
                  product={product}
                  materials={materials}
                  colors={colors}
                  setCartItems={setCartItems}
                  setIsCartOpen={setIsCartOpen}
                />
              </Fragment>
            ))
          ) : (
            <div>No matching products!</div>
          )}
        </div>
      )}
      <Pagination
        activePage={activePage}
        setActivePage={setActivePage}
        pages={pages}
      />
    </div>
  );
};

export default Products;
