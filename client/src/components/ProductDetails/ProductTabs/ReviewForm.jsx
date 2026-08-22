import React, { useState } from "react";

const ReviewForm = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      review,
      rating: Number(rating),
    });

    setName("");
    setReview("");
    setRating("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl p-8 w-125 max-w-[90%]">

        <h2 className="text-2xl font-bold mb-6">
          Write a Review
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none"
            required
          />

          {/* Rating */}
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full border rounded-xl p-3"
            required
          >
            <option value="" disabled>
              Select Rating
            </option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          {/* Review */}
          <textarea
            rows={5}
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border rounded-xl p-3 resize-none outline-none"
            required
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-black text-white"
            >
              Submit
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default ReviewForm;