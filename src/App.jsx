import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Products from "./components/Products";
import CartPanel from "./components/CartPanel";
import useFetchData from "./customHooks/useFetchData";
import { PRODUCTS_URL, MATERIAL_URL, COLORS_URL } from "./constants/apiUrls";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [colors, setColors] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef();

  const { data, error, loading } = useFetchData(PRODUCTS_URL);

  const {
    data: materialsData,
    error: materialsError,
    loading: materialsLoading,
  } = useFetchData(MATERIAL_URL);

  const {
    data: colorsData,
    error: colorsError,
    loading: colorsLoading,
  } = useFetchData(COLORS_URL);

  useEffect(() => {
    setProducts(data?.products);
    setMaterials(materialsData?.material);
    setColors(colorsData?.colors);
  }, [data, materialsData, colorsData]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= heroRef.current.offsetHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMaterialFilter = (id) => {
    const updatedProductsByMaterials = products?.filter(
      (product) => product?.materialId !== id
    );
    setProducts(updatedProductsByMaterials);
  };

  return (
    <>
      <div
        ref={heroRef}
        className="hero bg-[url('/hero-img.png')] h-[575px] relative"
      >
        <Header
          isScrolled={isScrolled}
          setIsCartOpen={setIsCartOpen}
          cartCount={cartItems?.length}
        />
        <div className="absolute top-[40%] text-white ml-[137px]">
          <h1 className="text-[64px] font-black leading-none">Latest Styles</h1>
          <p className="mb-[18px] text-xl font-extrabold">
            At Yesterday's Prices
          </p>
          <button className="font-bold uppercase rounded-xl py-3 px-4 bg-[#CA4022] transition-all duration-300 hover:opacity-85">
            Browse all styles
          </button>
        </div>
        <CartPanel
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>

      <div
        className={`white-section flex py-12 px-8 ${
          isScrolled ? "text-black" : ""
        }`}
      >
        <Filter
          materials={materials}
          materialsError={materialsError}
          materialsLoading={materialsLoading}
          colors={colors}
          colorsError={colorsError}
          colorsLoading={colorsLoading}
          handleMaterialFilter={handleMaterialFilter}
        />
        <Products
          products={products}
          loading={loading}
          materials={materials}
          colors={colors}
          setCartItems={setCartItems}
          setIsCartOpen={setIsCartOpen}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
