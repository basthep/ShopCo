import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24">

      <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center">

        <ShoppingCart
          size={48}
          className="text-gray-400"
        />

      </div>

      <h2 className="text-3xl font-bold mt-8">
        Your Cart is Empty
      </h2>

      <p className="text-gray-500 mt-3 text-center max-w-md leading-7">
        Looks like you haven't added anything to your cart yet.
        Browse our latest collection and find something you'll love.
      </p>

      <Link
        to="/category/all"
        className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Continue Shopping
      </Link>

    </section>
  );
};

export default EmptyCart;