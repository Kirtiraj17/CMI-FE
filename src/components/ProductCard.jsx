import React from "react";

const ProductCard = ({
  product,
  materials,
  colors,
  setCartItems,
  setIsCartOpen,
}) => {
  const color = colors
    ?.find((color) => color?.id === product?.colorId)
    ?.name?.toUpperCase();
  const material = materials
    ?.find((material) => material?.id === product?.materialId)
    ?.name.toUpperCase();

  const handleAddToCart = () => {
    setIsCartOpen(true);
    setCartItems((prevItems) => [...prevItems, product]);
  };

  //   console.log({ color, material });

  return (
    <div className="cursor-pointer group">
      <div className="relative">
        <img
          src={product?.image || "/productImg.png"}
          alt="productImg"
          className="bg-gray-300 aspect-[3/4]"
        />
        <div
          className="hidden group-hover:flex transition-all duration-300 absolute top-0 w-full h-full text-sm text-white font-bold justify-center items-center bg-black/80"
          onClick={handleAddToCart}
        >
          Add to cart
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-lg font-medium">{product?.name}</h2>
        <div className="mb-4">
          {color && <span className="mr-3 text-sm font-bold">{color}</span>}
          {material && <span>{material}</span>}
        </div>
        <p className="text-[#5A112B] text-sm">{`INR ${product?.price}.00`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
