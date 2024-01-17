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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [activeMaterial, setActiveMaterial] = useState(false);
  const [activeColor, setActiveColor] = useState(false);
  const [filters, setFilters] = useState([]);
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
  }, [data, materialsData, colorsData]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= heroRef.current.offsetHeight - 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProductFilter = (id, type) => {
    const updatedMaterialFilters = materialsData?.material?.filter(
      (material) => material?.id === id
    );
    const updatedColorFilters = colorsData?.colors?.filter(
      (color) => color?.id === id
    );

    setFilters((prevFilters) => {
      // Find the index of the filter with the same type
      const index = prevFilters.findIndex((filter) => filter.type === type);

      // Create a new array with the previous filters
      const updatedFilters = [...prevFilters];

      // Remove the filter with the same type if it exists
      if (index !== -1) {
        updatedFilters.splice(index, 1);
      }

      // Add the updated filter
      if (type === "material" && updatedMaterialFilters.length > 0) {
        updatedFilters.push({
          id: updatedMaterialFilters[0].id,
          name: updatedMaterialFilters[0].name,
          type,
        });
      }

      if (type === "color" && updatedColorFilters.length > 0) {
        updatedFilters.push({
          id: updatedColorFilters[0].id,
          name: updatedColorFilters[0].name,
          type,
        });
      }

      const updatedProductsByFilters = filterProductsByFilters(
        data?.products,
        updatedFilters.slice(0, 2)
      );
      setProducts(updatedProductsByFilters);

      // Ensure there are at most two values
      return updatedFilters.slice(0, 2);
    });
  };

  const handleRemoveFilter = (filterName, filterType) => {
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters.filter(
        (filter) => filter.name !== filterName && filter.type !== filterType
      );

      const updatedProductsByFilters = filterProductsByFilters(
        data?.products,
        updatedFilters.slice(0, 2)
      );
      setProducts(updatedProductsByFilters);
      return updatedFilters.slice(0, 2);
    });
  };

  const filterProductsByFilters = (products, filters) => {
    return products.filter((product) => {
      const materialFilter = filters.find(
        (filter) => filter.type === "material"
      );
      const colorFilter = filters.find((filter) => filter.type === "color");

      const materialMatch =
        !materialFilter || product.materialId === materialFilter.id;
      const colorMatch = !colorFilter || product.colorId === colorFilter.id;

      return materialMatch && colorMatch;
    });
  };

  // console.log(products, "products", filters);

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
          materials={materialsData?.material}
          materialsError={materialsError}
          materialsLoading={materialsLoading}
          colors={colorsData?.colors}
          colorsError={colorsError}
          colorsLoading={colorsLoading}
          handleProductFilter={handleProductFilter}
          handleRemoveFilter={handleRemoveFilter}
          activeMaterial={activeMaterial}
          setActiveMaterial={setActiveMaterial}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <Products
          products={products}
          loading={loading}
          materials={materialsData?.material}
          colors={colorsData?.colors}
          setCartItems={setCartItems}
          setIsCartOpen={setIsCartOpen}
          filters={filters}
          handleRemoveFilter={handleRemoveFilter}
          setActiveMaterial={setActiveMaterial}
          setActiveColor={setActiveColor}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
