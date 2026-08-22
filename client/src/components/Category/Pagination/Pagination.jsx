import React from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 pt-6 mt-10">

      {/* Previous */}
      <button
        onClick={() =>
          currentPage > 1 &&
          onPageChange(currentPage - 1)
        }
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition disabled:opacity-50"
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">
          Previous
        </span>
      </button>

      {/* Mobile */}
      <div className="flex lg:hidden items-center gap-2">

        <button className="w-9 h-9 rounded-lg bg-gray-100 font-semibold">
          {currentPage}
        </button>

        <span className="text-gray-500">
          / {totalPages}
        </span>

      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center gap-2">

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg text-sm transition ${
              currentPage === page
                ? "bg-gray-100 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <span className="px-2 text-gray-500">
          ...
        </span>

        {[8, 9, 10].map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg text-sm transition ${
              currentPage === page
                ? "bg-gray-100 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

      </div>

      {/* Next */}
      <button
        onClick={() =>
          currentPage < totalPages &&
          onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition disabled:opacity-50"
      >
        <span className="hidden sm:inline">
          Next
        </span>

        <ChevronRight size={16} />
      </button>

    </div>
  );
};

export default Pagination;