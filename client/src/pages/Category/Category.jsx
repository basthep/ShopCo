import React, { useState } from "react";
import { X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import OfferDisplay from "../../components/OfferDisplay/OfferDisplay";
import CategoryBreadcrumb from "../../components/Category/CategoryBreadcrumb/CategoryBreadcrumb";
import CategorySidebar from "../../components/Category/CategorySidebar/CategorySidebar";
import CategoryHeader from "../../components/Category/CategoryHeader/CategoryHeader";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Pagination from "../../components/category/Pagination/Pagination";
import FooterSection from "../../components/FooterSection/FooterSection";

const Category = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const [searchParams] = useSearchParams();

  const filters = {
    style: searchParams.get("style"),
    category: searchParams.get("category"),
    size: searchParams.get("size"),
    color: searchParams.get("color"),
    minPrice: searchParams.get("minPrice"),
    maxPrice: searchParams.get("maxPrice"),
  };

  return (
    <>
      <OfferDisplay />

      <Navbar />

      <hr className="w-[90%] mx-auto border-gray-200" />

      <CategoryBreadcrumb />

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-start lg:hidden">

          <div
            className="
              mt-20
              w-[95%]
              h-[calc(100vh-5rem)]
              bg-white
              rounded-t-3xl
              overflow-y-auto
              shadow-2xl
            "
          >

            <div className="sticky top-0 bg-white rounded-t-3xl border-b flex justify-between items-center p-5 z-10">

              <h2 className="text-xl font-bold">
                Filters
              </h2>

              <button
                onClick={() => setShowFilters(false)}
              >
                <X size={22} />
              </button>

            </div>

            <div className="p-5">

              <CategorySidebar />

            </div>

          </div>

        </div>
      )}

      <section className="w-[90%] mx-auto flex flex-col lg:flex-row gap-6">

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">

          <CategorySidebar />

        </div>

        {/* Right Content */}
        <div className="flex-1">

          <CategoryHeader
            onOpenFilters={() => setShowFilters(true)}
          />

          <ProductGrid
            filters={filters}
          />

          <div className="hidden min-[520px]:block">

            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />

          </div>

        </div>

      </section>

      <FooterSection />

    </>
  );
};

export default Category;