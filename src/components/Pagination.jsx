import React from "react";

const Pagination = ({ activePage, setActivePage, pages }) => {
  return (
    <div className="mt-[70px] mb-10">
      <ul className="flex justify-center">
        {Array.from({ length: pages })?.map((_, idx) => (
          <li
            key={idx}
            className={`w-8 h-8 mr-2 flex justify-center items-center cursor-pointer hover:bg-gray-300 hover:rounded-full ${
              activePage === idx + 1 ? "active-page" : ""
            }`}
            onClick={() => setActivePage(idx + 1)}
          >
            {idx + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
