import React from "react";
import { ChevronRight } from "lucide-react";

const CartBreadcrumb = () => {
  return (
    <section className="w-full flex">
      <div className="w-[90%] flex items-center text-sm text-gray-500">

        <span>Home</span>

        <ChevronRight size={16} className="mx-2" />

        <span className="text-black font-medium">
          Cart
        </span>

      </div>
    </section>
  );
};

export default CartBreadcrumb;