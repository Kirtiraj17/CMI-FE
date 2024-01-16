import React from "react";

const Pagination = () => {
  return (
    <div className="mt-[70px] mb-10">
      <ul className="flex justify-center">
        <li className="w-8 h-8 bg-gray-300 mr-2 rounded-full flex justify-center items-center cursor-pointer">
          1
        </li>
        <li className="w-8 h-8 mr-2 flex justify-center items-center cursor-pointer">
          2
        </li>
        <li className="w-8 h-8 mr-2 flex justify-center items-center cursor-pointer">
          3
        </li>
        <li className="w-8 h-8 mr-2 flex justify-center items-center cursor-pointer">
          4
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
