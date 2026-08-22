import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const CategoryHeader = ({ onOpenFilters }) => {
  const [searchParams] = useSearchParams();

  const style = searchParams.get("style");
  const title = style || "All Products";

  return (
    <div className="mb-8">

      {/* Mobile & Tablet */}
      <div className="flex lg:hidden items-center justify-between">

        {/* Left */}
        <h1 className="text-2xl font-bold shrink-0">
          {title}
        </h1>

        {/* Right */}
        <div className="flex items-center justify-end flex-1 gap-3">

          <p className="text-xs text-gray-500 whitespace-nowrap">
            Showing 1-10 of 100 Products
          </p>

          <button
            onClick={onOpenFilters}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0"
          >
            <SlidersHorizontal size={18} />
          </button>

        </div>

      </div>

      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <div className="flex items-center gap-4">

          <p className="text-gray-500">
            Showing 1-10 of 100 Products
          </p>

          <div className="flex items-center gap-2">

            <span className="text-gray-500">
              Sort by:
            </span>

            <select className="bg-transparent outline-none font-medium cursor-pointer">
              <option>Most Popular</option>
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CategoryHeader;