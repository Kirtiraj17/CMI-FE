import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[url('/hero-img.png')] h-[575px] relative">
        <Header />
        <div className="absolute top-[40%] text-white ml-[137px]">
          <h1 className="text-[64px] font-black leading-none">Latest Styles</h1>
          <p className="mb-[18px] text-xl font-extrabold">
            At Yesterday's Prices
          </p>
          <button className="font-bold uppercase rounded-xl py-3 px-4 bg-[#CA4022] transition-all duration-300 hover:opacity-85">
            Browse all styles
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
