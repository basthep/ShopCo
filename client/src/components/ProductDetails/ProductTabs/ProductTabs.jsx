import { useState } from "react";
import ProductDetailsTab from "./ProductDetailsTab";
import ProductReviewsTab from "./ProductReviewsTab";
import ProductFaqTab from "./ProductFaqTab";

const ProductTabs = ({
    product,
    reviews,
    faqs,
}) => {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <section className="w-full flex justify-center mt-16">
      <div className="w-[90%]">

        <div className="border-b border-gray-300">
          <div className="flex justify-between">

            <button
              onClick={() => setActiveTab("details")}
              className={`flex-1 py-4 ${
                activeTab === "details"
                  ? "border-b-2 border-black font-semibold text-black"
                  : "text-gray-400"
              }`}
            >
              Product Details
            </button>

            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex-1 py-4 ${
                activeTab === "reviews"
                  ? "border-b-2 border-black font-semibold text-black"
                  : "text-gray-400"
              }`}
            >
              Rating & Reviews
            </button>

            <button
              onClick={() => setActiveTab("faq")}
              className={`flex-1 py-4 ${
                activeTab === "faq"
                  ? "border-b-2 border-black font-semibold text-black"
                  : "text-gray-400"
              }`}
            >
              FAQs
            </button>

          </div>
        </div>

        <div className="py-10">

          {activeTab === "details" && (
            <ProductDetailsTab product={product} />
          )}

          {activeTab === "reviews" && (
            <ProductReviewsTab
    reviews={reviews}
/>
          )}

          {activeTab === "faq" && (
            <ProductFaqTab
  faqs={faqs}
/>
          )}

        </div>

      </div>
    </section>
  );
};

export default ProductTabs;