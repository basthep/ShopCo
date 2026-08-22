import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import {
  Star,
  SlidersHorizontal,
  CheckCircle2,
  MoreHorizontal,
} from "lucide-react";

const ProductReviewsTab = ({ reviews: productReviews }) => {

  const [reviews, setReviews] =
    useState(productReviews || []);

  const [openReviewForm, setOpenReviewForm] =
    useState(false);

  const [visibleReviews, setVisibleReviews] =
    useState(6);


  const displayedReviews =
    reviews.slice(0, visibleReviews);


  const handleAddReview = (formData) => {

    const newReview = {
      id: reviews.length + 1,
      name: formData.name,
      rating: formData.rating,
      verified: true,
      review: formData.review,
      date: `Posted on ${new Date().toLocaleDateString()}`,
    };

    setReviews([newReview, ...reviews]);
  };


  return (
    <div>

      {/* Header */}
      <div className="flex items-center justify-between mb-10 gap-2">

        {/* Left */}
        <h2 className="text-lg sm:text-2xl font-bold whitespace-nowrap">
          All Reviews

          <span className="text-gray-400 font-normal text-base sm:text-lg ml-2">
            ({reviews.length})
          </span>
        </h2>


        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Filter */}
          <button
            className="
              w-10 h-10
              sm:w-12 sm:h-12
              rounded-full
              bg-gray-100
              hover:bg-gray-200
              transition
              flex justify-center items-center
              shrink-0
            "
          >
            <SlidersHorizontal size={18} />
          </button>


          {/* Sort */}
          <select
            className="
              hidden lg:block
              px-5 py-3
              rounded-full
              bg-gray-100
              outline-none
              font-medium
            "
          >
            <option>Latest</option>
            <option>Oldest</option>
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
          </select>


          {/* Review Button */}
          <button
            onClick={() => setOpenReviewForm(true)}
            className="
              bg-black
              text-white
              px-4 sm:px-7
              py-2.5 sm:py-3
              rounded-full
              hover:bg-gray-900
              transition
              font-medium
              text-sm sm:text-base
              whitespace-nowrap
            "
          >
            Write a Review
          </button>

        </div>

      </div>


      {/* Reviews */}
      {reviews.length === 0 ? (

        // No Reviews
        <div
          className="
            border
            border-gray-200
            rounded-3xl
            p-10
            text-center
          "
        >
          <h3 className="text-xl font-bold">
            No reviews yet
          </h3>

          <p className="text-gray-500 mt-2">
            Be the first to review this product.
          </p>

          <button
            onClick={() => setOpenReviewForm(true)}
            className="
              mt-6
              bg-black
              text-white
              px-7
              py-3
              rounded-full
              hover:bg-gray-900
              transition
              font-medium
            "
          >
            Write a Review
          </button>
        </div>

      ) : (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {displayedReviews.map((review) => (

            <div
              key={review.id}
              className="
                border
                border-gray-200
                rounded-3xl
                p-7
              "
            >

              {/* Top */}
              <div className="flex justify-between items-start mb-4">

                <div>

                  {/* Stars */}
                  <div className="flex mb-3">

                    {[...Array(5)].map((_, index) => (

                      <Star
                        key={index}
                        size={18}
                        fill={
                          index < review.rating
                            ? "#FFC633"
                            : "none"
                        }
                        color="#FFC633"
                      />

                    ))}

                  </div>


                  {/* Name */}
                  <div className="flex items-center gap-2">

                    <h3 className="font-bold text-lg">
                      {review.name}
                    </h3>

                    {review.verified && (
                      <CheckCircle2
                        size={18}
                        className="fill-green-500 text-white"
                      />
                    )}

                  </div>

                </div>


                {/* More */}
                <button className="hidden lg:flex">
                  <MoreHorizontal
                    className="text-gray-400"
                    size={22}
                  />
                </button>

              </div>


              {/* Review */}
              <p className="text-gray-500 leading-8">
                "{review.review}"
              </p>


              {/* Date */}
              <p className="text-gray-400 mt-6 text-sm">
                {review.date}
              </p>

            </div>

          ))}

        </div>

      )}


      {/* Load More */}
      {reviews.length > visibleReviews && (

        <div className="flex justify-center mt-12">

          <button
            onClick={() =>
              setVisibleReviews(
                (prev) => prev + 6
              )
            }
            className="
              border
              border-gray-300
              rounded-full
              px-12
              py-3
              hover:bg-gray-100
              transition
            "
          >
            Load More Reviews
          </button>

        </div>

      )}


      {/* Review Form */}
      <ReviewForm
        open={openReviewForm}
        onClose={() =>
          setOpenReviewForm(false)
        }
        onSubmit={handleAddReview}
      />

    </div>
  );
};


export default ProductReviewsTab;