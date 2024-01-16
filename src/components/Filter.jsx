import React from "react";

const Filter = () => {
  return (
    <div className="w-1/4 mr-8">
      <div className="font-bold mb-8">Filter</div>
      <div className="mb-8">
        <p className="mb-2">Materials</p>
        <ul className="max-h-40 overflow-y-auto">
          <li className="mb-2 transition-all hover:font-bold cursor-pointer active-filter">
            All
          </li>
          <li className="mb-2 transition-all hover:font-bold cursor-pointer">
            Cotton
          </li>
          <li className="mb-2 transition-all hover:font-bold cursor-pointer">
            Lycra
          </li>
          <li className="mb-2 transition-all hover:font-bold cursor-pointer">
            Lycra
          </li>
          <li className="mb-2 transition-all hover:font-bold cursor-pointer">
            Lycra
          </li>
          <li className="mb-2 transition-all hover:font-bold cursor-pointer">
            Lycra
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <p className="mb-2">Colors</p>
        <ul className="max-h-40 overflow-y-auto">
          <li className="mb-2 transition-all hover:font-bold cursor-pointer active-filter">
            All
          </li>
          <li className="mb-2 transition-all hover:font-bold cursor-pointer">
            Black
          </li>
          <li className="mb-2 transition-all hover:font-bold cursor-pointer">
            Red
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
