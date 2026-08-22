import React, { useState } from "react";
import { X } from "lucide-react";

const OfferDisplay = () => {
  const [showOffer, setShowOffer] = useState(true);

  if (!showOffer) return null;

  return (
    <div className="relative h-8 flex items-center justify-center bg-black">

      <p className="text-sm text-white">
        Sign up and get 20% off to your first order.
        <a
          href="#"
          className="ml-1 underline font-bold"
        >
          Sign Up Now
        </a>
      </p>

      <button
        onClick={() => setShowOffer(false)}
        className="hidden md:block absolute right-20 text-white hover:text-gray-300"
        aria-label="Close"
      >
        <X size={18} />
      </button>

    </div>
  );
};

export default OfferDisplay;