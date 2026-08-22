import React, { useState } from "react";
import { ArrowRight, Tag } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderSummary = ({
  subtotal,
  discount,
  deliveryFee,
  onCheckout,
}) => {

  const [promoCode, setPromoCode] = useState("");

  const total = subtotal - discount + deliveryFee;

  const handleApplyPromo = () => {

    if (!promoCode.trim()) {
      toast.warning("Please enter a promo code");
      return;
    }

    toast.info("Invalid promo code");
  };

  return (
    <div className="border border-gray-300 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span className="font-bold">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Discount (-20%)
          </span>

          <span className="text-red-500 font-bold">
            -${discount.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">
            Delivery Fee
          </span>

          <span className="font-bold">
            ${deliveryFee.toFixed(2)}
          </span>
        </div>

        <hr className="border-gray-300" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span>
            ${total.toFixed(2)}
          </span>
        </div>

      </div>

      {/* Promo Code */}
      <div className="flex mt-6 gap-3">

        <div className="flex items-center bg-gray-100 rounded-full px-4 flex-1">

          <Tag
            size={18}
            className="text-gray-400 mr-2"
          />

          <input
            value={promoCode}
            onChange={(e) =>
              setPromoCode(e.target.value)
            }
            placeholder="Add promo code"
            className="bg-transparent outline-none flex-1 py-3"
          />

        </div>

        <button
          onClick={handleApplyPromo}
          className="bg-black text-white rounded-full px-6"
        >
          Apply
        </button>

      </div>

      {/* Checkout */}
      <button
        onClick={onCheckout}
        className="w-full bg-black text-white rounded-full py-4 mt-6 flex justify-center items-center gap-3"
      >
        Go to Checkout
        <ArrowRight size={18} />
      </button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

    </div>
  );
};

export default OrderSummary; 