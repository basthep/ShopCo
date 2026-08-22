import React from "react";

const ProductDetailsTab = ({ product }) => {
  const careInstructions = [
    "Follow the manufacturer's care instructions.",
    "Keep the product clean and dry.",
    "Store in a cool and dry place when not in use.",
    "Avoid exposure to harsh chemicals or extreme temperatures.",
    "Handle the product carefully to maintain its quality."
  ];

  return (
    <div className="space-y-8">

      {/* Description */}
      <div>
        <h2 className="text-2xl font-bold mb-3">
          Product Details
        </h2>

        <p className="text-gray-600 leading-8">
          {product.description}
        </p>
      </div>

      {/* Specifications & Care */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Specifications */}
        <div className="bg-gray-50 rounded-2xl p-6">

          <h3 className="text-xl font-bold mb-5">
            Product Specifications
          </h3>

          <div className="space-y-4">
            {Object.entries(product.details).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between border-b border-gray-200 pb-3"
                >
                  <span className="text-gray-500">
                    {key}
                  </span>

                  <span className="font-semibold">
                    {value}
                  </span>
                </div>
              )
            )}
          </div>

        </div>

        {/* Care Instructions */}
        <div className="bg-gray-50 rounded-2xl p-6">

          <h3 className="text-xl font-bold mb-5">
            Care Instructions
          </h3>

          <ul className="space-y-3 list-disc ml-5">
            {careInstructions.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 leading-7"
              >
                {item}
              </li>
            ))}
          </ul>

        </div>

      </div>

    </div>
  );
};

export default ProductDetailsTab;