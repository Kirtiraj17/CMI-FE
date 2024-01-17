import React, { useState } from "react";

const Filter = ({
  materials,
  materialsError,
  materialsLoading,
  colors,
  colorsError,
  colorsLoading,
  handleProductFilter,
  handleRemoveFilter,
  activeMaterial,
  setActiveMaterial,
  activeColor,
  setActiveColor,
}) => {
  return (
    <div className="w-1/5 mr-8">
      <div className="font-bold mb-8">Filter</div>
      <div className="mb-8">
        <p className="mb-2">Materials</p>
        {materialsLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="max-h-40 overflow-y-auto">
            <li
              className={`mb-2 transition-all hover:font-bold cursor-pointer ${
                !activeMaterial ? "active-filter" : ""
              }`}
              onClick={() => {
                handleProductFilter(null);
                handleRemoveFilter(null, "material");
                setActiveMaterial(false);
              }}
            >
              All
            </li>
            {materials?.map((material) => {
              const materialName =
                material?.name?.charAt(0).toUpperCase() +
                material?.name.slice(1);

              return (
                <li
                  key={material?.id}
                  className={`mb-2 transition-all hover:font-bold cursor-pointer ${
                    activeMaterial === material?.id ? "active-filter" : ""
                  }`}
                  onClick={() => {
                    handleProductFilter(material?.id, "material");
                    setActiveMaterial(material?.id);
                  }}
                >
                  {materialName}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="mb-8">
        <p className="mb-2">Colors</p>
        {colorsLoading ? (
          <div>Loading...</div>
        ) : (
          <ul className="max-h-40 overflow-y-auto">
            <li
              className={`mb-2 transition-all hover:font-bold cursor-pointer ${
                !activeColor ? "active-filter" : ""
              }`}
              onClick={() => {
                handleProductFilter(null);
                handleRemoveFilter(null, "color");
                setActiveColor(false);
              }}
            >
              All
            </li>
            {colors?.map((color) => {
              const colorName =
                color?.name?.charAt(0).toUpperCase() + color?.name.slice(1);

              return (
                <li
                  key={color?.id}
                  className={`mb-2 transition-all hover:font-bold cursor-pointer ${
                    activeColor === color?.id ? "active-filter" : ""
                  }`}
                  onClick={() => {
                    handleProductFilter(color?.id, "color");
                    setActiveColor(color?.id);
                  }}
                >
                  {colorName}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Filter;
