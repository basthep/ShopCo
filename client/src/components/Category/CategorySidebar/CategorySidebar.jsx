import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";


const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
];

const colors = [
  "#00C853",
  "#F44336",
  "#FFEB3B",
  "#FF9800",
  "#00BCD4",
  "#3F51B5",
  "#9C27B0",
  "#000000",
  "#795548",
  "#E91E63",
];

const categories = [
  "T-Shirts",
  "Shorts",
  "Shirts",
  "Hoodie",
  "Jeans",
];

const dressStyles = [
  "Casual",
  "Formal",
  "Party",
  "Gym",
];

const CategorySidebar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); 
  const style = searchParams.get("style");

  const [price, setPrice] = useState([0, 999]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDressStyle, setSelectedDressStyle] = useState(style || null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [openCategory, setOpenCategory] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [openColors, setOpenColors] = useState(true);
  const [openSizes, setOpenSizes] = useState(true);
  const [openDress, setOpenDress] = useState(true);

  const toggleCategory = () => {
    if (openCategory) setSelectedCategory(null);
    setOpenCategory(!openCategory);
  };

  const togglePrice = () => {
    if (openPrice) setPrice([null, null]);
    setOpenPrice(!openPrice);
  };

  const toggleColors = () => {
    if (openColors) setSelectedColor(null);
    setOpenColors(!openColors);
  };

  const toggleSizes = () => {
    if (openSizes) setSelectedSize(null);
    setOpenSizes(!openSizes);
  };

  const toggleDress = () => {
    if (openDress) setSelectedDressStyle(null);
    setOpenDress(!openDress);
  };

  const handleApplyFilter = () => {
  const params = new URLSearchParams();

  if (selectedDressStyle)
    params.append("style", selectedDressStyle);

  if (selectedCategory)
    params.append("category", selectedCategory);

  if (selectedSize)
    params.append("size", selectedSize);

  if (selectedColor)
    params.append("color", selectedColor);

  if (price[0] !== null)
    params.append("minPrice", price[0]);

  if (price[1] !== null)
    params.append("maxPrice", price[1]);

  navigate(`/category?${params.toString()}`);
};

  return (
    <div className="w-full lg:w-72.5 border border-gray-200 rounded-3xl p-6 h-fit">

      <h2 className="font-bold text-xl mb-6">
        Filters
      </h2>

      {/* Categories */}

      <button
        onClick={toggleCategory}
        className="w-full flex justify-between items-center font-semibold"
      >
        <span>Category</span>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            openCategory ? "rotate-180" : ""
          }`}
        />
      </button>

      {openCategory && (
        <div className="space-y-4 mt-5">

          {categories.map((item) => {
            const isSelected = selectedCategory === item;

            return (
              <button
                key={item}
                onClick={() =>
                  setSelectedCategory(
                    isSelected ? null : item
                  )
                }
                className={`w-full flex justify-between items-center transition ${
          isSelected
            ? "text-black font-medium"
            : "text-gray-500 hover:text-black"
        }`}
              >
                <span>{item}</span>

                {isSelected ? (
                  <ChevronDown
                    size={16}
                    className="text-black"
                  />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
            );
          })}
        </div>
      )}

      <hr className="my-6 border-gray-100" />

      {/* Price */}

      <button
        onClick={togglePrice}
        className="w-full flex justify-between items-center font-semibold"
      >
        <span>Price</span>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            openPrice ? "rotate-180" : ""
          }`}
        />
      </button>

      {openPrice && (
        <div className="mt-5">

          <div className="relative h-4">

            {price[0] !== null && (
              <span
                className="absolute text-xs font-semibold -translate-x-1/2"
                style={{
                  left: `${(price[0] / 999) * 100}%`,
                }}
              >
                ${price[0]}
              </span>
            )}

            {price[1] !== null && (
              <span
                className="absolute text-xs font-semibold -translate-x-1/2"
                style={{
                  left: `${(price[1] / 999) * 100}%`,
                }}
              >
                ${price[1]}
              </span>
            )}
          </div>

          <Slider
            value={[
              price[0] ?? 0,
              price[1] ?? 999,
            ]}
            onChange={(e, value) =>
              setPrice(value)
            }
            min={0}
            max={999}
            sx={{ color: "#000" }}
          />

        </div>
      )}

      <hr className="my-6 border-gray-100" />

      {/* Colors */}

      <button
        onClick={toggleColors}
        className="w-full flex justify-between items-center font-semibold"
      >
        <span>Colors</span>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            openColors ? "rotate-180" : ""
          }`}
        />
      </button>

      {openColors && (
        <div className="grid grid-cols-5 gap-3 mt-5">

          {colors.map((color) => (
            <button
              key={color}
              onClick={() =>
                setSelectedColor(
                  selectedColor === color
                    ? null
                    : color
                )
              }
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color
                  ? "border-black scale-110"
                  : "border-gray-200"
              }`}
              style={{
                backgroundColor: color,
              }}
            />
          ))}
        </div>
      )}

      <hr className="my-6 border-gray-100" />

      {/* Sizes */}

      <button
        onClick={toggleSizes}
        className="w-full flex justify-between items-center font-semibold"
      >
        <span>Size</span>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            openSizes ? "rotate-180" : ""
          }`}
        />
      </button>

      {openSizes && (
        <div className="flex flex-wrap gap-2 mt-5">

          {sizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                setSelectedSize(
                  selectedSize === size
                    ? null
                    : size
                )
              }
              className={`px-4 py-2 rounded-full text-sm transition ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-black hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}

        </div>
      )}

      <hr className="my-6 border-gray-100" />

      {/* Dress Style */}

      <button
        onClick={toggleDress}
        className="w-full flex justify-between items-center font-semibold"
      >
        <span>Dress Style</span>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            openDress ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDress && (
        <div className="space-y-4 mt-5">

          {dressStyles.map((style) => {
            const isSelected =
              selectedDressStyle === style;

            return (
              <button
                key={style}
                onClick={() =>
                  setSelectedDressStyle(
                    isSelected ? null : style
                  )
                }
                className={`w-full flex justify-between items-center transition ${
            isSelected
              ? "text-black font-medium"
              : "text-gray-500 hover:text-black"
          }`}
              >
                <span>{style}</span>

                {isSelected ? (
                  <ChevronDown
                    size={16}
                    className="text-black"
                  />
                ) : (
                  <ChevronRight
                    size={16}
                  />
                )}
              </button>
            );
          })}

        </div>
      )}

      <button
        onClick={handleApplyFilter}
        className="mt-8 w-full bg-black text-white py-3 rounded-full hover:bg-gray-900 transition"
      >
        Apply Filter
      </button>

    </div>
  );
};

export default CategorySidebar;