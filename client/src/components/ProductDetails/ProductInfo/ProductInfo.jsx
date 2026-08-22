import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Minus,
  Plus,
  Check,
} from "lucide-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addToCart } from "../../../services/cartService";

const ProductInfo = ({ product }) => {

  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] =
    useState(product.colors[0]);

  const [selectedSize, setSelectedSize] =
    useState(product.sizes[0]);

  const [quantity, setQuantity] =
    useState(1);

  const [loading, setLoading] =
    useState(false);

  const colors = product.colors;
  const sizes = product.sizes;

  const handleAddToCart = async () => {

    const token = localStorage.getItem("token");

    if (!token) {
      toast.warning("Please login to add products to cart");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

      return;
    }

    try {

      setLoading(true);

      await addToCart(
        product.id,
        quantity,
        selectedSize,
        selectedColor
      );

      toast.success("Product added to cart");

    } catch (error) {

      console.error(
        "Error adding product to cart:",
        error
      );

      toast.error(
        error.response?.data?.message ||
        "Failed to add product to cart"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="w-full">

      {/* Title */}
      <h1 className="text-4xl font-extrabold leading-tight">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center mt-2 gap-3">

        <div className="flex">

          {[...Array(5)].map((_, index) => (

            <Star
              key={index}
              size={22}
              fill={
                index < Math.floor(product.rating)
                  ? "#FFC633"
                  : "none"
              }
              color="#FFC633"
            />

          ))}

        </div>

        <span className="text-gray-500">
          {product.rating}/5
        </span>

      </div>

      {/* Price */}
      <div className="flex items-center gap-4 mt-2">

        <h2 className="text-4xl font-bold">
          ${product.offerPrice ?? product.price}
        </h2>

        {product.offerPrice && (
          <span className="text-3xl text-gray-400 line-through">
            ${product.price}
          </span>
        )}

        {product.offer && (
          <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
            -{product.offer}%
          </span>
        )}

      </div>

      {/* Description */}
      <p className="mt-4 text-xl lg:text-base text-gray-500 leading-7">
        {product.description}
      </p>

      <hr className="my-6 border-gray-300" />

      {/* Colors */}
      <div>

        <h3 className="text-gray-500 mb-3">
          Select Colors
        </h3>

        <div className="flex gap-4">

          {colors.map((color) => (

            <button
              key={color}
              onClick={() =>
                setSelectedColor(color)
              }
              className={`
                w-10 h-10 rounded-full
                flex items-center justify-center
                transition duration-200
                ${selectedColor === color
                  ? "scale-110"
                  : ""}
              `}
              style={{
                backgroundColor: color
              }}
            >

              {selectedColor === color && (
                <Check
                  size={18}
                  className="text-white"
                  strokeWidth={3}
                />
              )}

            </button>

          ))}

        </div>

      </div>

      <hr className="my-6 border-gray-300" />

      {/* Sizes */}
      <div>

        <h3 className="text-gray-500 mb-3">
          Choose Size
        </h3>

        <div className="flex flex-wrap gap-3">

          {sizes.map((size) => (

            <button
              key={size}
              onClick={() =>
                setSelectedSize(size)
              }
              className={`px-6 py-3 rounded-full transition ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {size}
            </button>

          ))}

        </div>

      </div>

      <hr className="my-6 border-gray-300" />

      {/* Quantity & Add to Cart */}
      <div className="flex flex-row items-center gap-3">

        {/* Quantity */}
        <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3 w-30 sm:w-44 shrink-0">

          <button
            onClick={() =>
              quantity > 1 &&
              setQuantity(quantity - 1)
            }
          >
            <Minus size={18} />
          </button>

          <span className="font-semibold">
            {quantity}
          </span>

          <button
            onClick={() =>
              setQuantity(quantity + 1)
            }
          >
            <Plus size={18} />
          </button>

        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={loading}
          className="
            flex-1
            bg-black
            text-white
            rounded-full
            py-4
            font-medium
            hover:bg-gray-900
            transition
            disabled:opacity-50
          "
        >
          {loading
            ? "Adding..."
            : "Add to Cart"}
        </button>

      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  );
};

export default ProductInfo;