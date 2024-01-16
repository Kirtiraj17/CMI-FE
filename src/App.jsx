import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Products from "./components/Products";
import CartPanel from "./components/CartPanel";
import "./App.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= heroRef.current.offsetHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroRef = useRef();

  return (
    <>
      <div
        ref={heroRef}
        className="hero bg-[url('/hero-img.png')] h-[575px] relative"
      >
        <Header isScrolled={isScrolled} />
        <div className="absolute top-[40%] text-white ml-[137px]">
          <h1 className="text-[64px] font-black leading-none">Latest Styles</h1>
          <p className="mb-[18px] text-xl font-extrabold">
            At Yesterday's Prices
          </p>
          <button className="font-bold uppercase rounded-xl py-3 px-4 bg-[#CA4022] transition-all duration-300 hover:opacity-85">
            Browse all styles
          </button>
        </div>
        <CartPanel />
      </div>

      <div
        className={`white-section flex py-12 px-8 ${
          isScrolled ? "text-black" : ""
        }`}
      >
        <Filter />
        <Products />
      </div>

      <Footer />
    </>
  );
}

export default App;
