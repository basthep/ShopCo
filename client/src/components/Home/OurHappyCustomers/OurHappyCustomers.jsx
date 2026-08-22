import React from "react";
import { Star, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is outstanding.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emma W.",
    review:
      "Excellent quality and quick delivery. The products look exactly like the pictures and fit perfectly.",
    rating: 5,
  },
];

const OurHappyCustomers = () => {
  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-[90%]">

        {/* Heading */}
        <div className="flex justify-between items-center mb-10">

          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
            OUR HAPPY CUSTOMERS
          </h1>

          <div className="hidden lg:flex items-center gap-3">

            <button className="w-10 h-10 rounded-full border hover:bg-gray-100 flex items-center justify-center transition">
              <ArrowLeft size={18} />
            </button>

            <button className="w-10 h-10 rounded-full border hover:bg-gray-100 flex items-center justify-center transition">
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* Reviews */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible scrollbar-hide">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] lg:min-w-0 border border-gray-200 rounded-3xl p-7 bg-white"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#FFC633"
                    color="#FFC633"
                  />
                ))}
              </div>

              {/* Name */}
              <div className="flex items-center gap-2 mb-4">

                <h2 className="font-bold text-lg">
                  {item.name}
                </h2>

                <CheckCircle2
                  size={18}
                  className="text-green-500 fill-green-500 text-white"
                />

              </div>

              {/* Review */}
              <p className="text-gray-500 leading-7">
                "{item.review}"
              </p>

            </div>
          ))}

        </div>

        {/* Mobile arrows */}
        <div className="flex lg:hidden justify-center gap-4 mt-8">

          <button className="w-10 h-10 rounded-full border flex items-center justify-center">
            <ArrowLeft size={18} />
          </button>

          <button className="w-10 h-10 rounded-full border flex items-center justify-center">
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default OurHappyCustomers;