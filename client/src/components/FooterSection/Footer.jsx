import React from "react";
import Visa from "../../assets/visa.png";
import Mastercard from "../../assets/mastercard.png";
import Paypal from "../../assets/paypal.png";
import Applepay from "../../assets/applepay.png";
import Googlepay from "../../assets/googlepay.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F2F0F1] pt-40 pb-8 -mt-20">
      <div className="w-[90%] mx-auto">

        {/* Top */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Logo */}
          <div className="col-span-2 lg:col-span-2">
            <h1 className="text-4xl font-black">
              SHOP.CO
            </h1>

            <p className="mt-5 text-sm text-gray-500 lg:leading-6">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 font-semibold uppercase tracking-[0.2em]">
              Company
            </h3>

            <ul className="space-y-4 text-gray-500">
              <li className="cursor-pointer hover:text-black">About</li>
              <li className="cursor-pointer hover:text-black">Features</li>
              <li className="cursor-pointer hover:text-black">Works</li>
              <li className="cursor-pointer hover:text-black">Career</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="mb-6 font-semibold uppercase tracking-[0.2em]">
              Help
            </h3>

            <ul className="space-y-4 text-gray-500">
              <li className="cursor-pointer hover:text-black">
                Customer Support
              </li>
              <li className="cursor-pointer hover:text-black">
                Delivery Details
              </li>
              <li className="cursor-pointer hover:text-black">
                Terms & Conditions
              </li>
              <li className="cursor-pointer hover:text-black">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="mb-6 font-semibold uppercase tracking-[0.2em]">
              FAQ
            </h3>

            <ul className="space-y-4 text-gray-500">
              <li className="cursor-pointer hover:text-black">Account</li>
              <li className="cursor-pointer hover:text-black">
                Manage Deliveries
              </li>
              <li className="cursor-pointer hover:text-black">Orders</li>
              <li className="cursor-pointer hover:text-black">Payments</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 font-semibold uppercase tracking-[0.2em]">
              Resources
            </h3>

            <ul className="space-y-4 text-gray-500">
              <li className="cursor-pointer hover:text-black">
                Free eBooks
              </li>
              <li className="cursor-pointer hover:text-black">
                Development Tutorial
              </li>
              <li className="cursor-pointer hover:text-black">
                How to - Blog
              </li>
              <li className="cursor-pointer hover:text-black">
                Youtube Playlist
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-300 pt-6 lg:flex-row">

          <p className="text-center text-sm text-gray-500 lg:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">

            <img
              src={Visa}
              alt="Visa"
              className="h-8 w-auto object-contain"
            />

            <img
              src={Mastercard}
              alt="Mastercard"
              className="h-8 w-auto object-contain"
            />

            <img
              src={Paypal}
              alt="Paypal"
              className="h-8 w-auto object-contain"
            />

            <img
              src={Applepay}
              alt="Apple Pay"
              className="h-8 w-auto object-contain"
            />

            <img
              src={Googlepay}
              alt="Google Pay"
              className="h-8 w-auto object-contain"
            />

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;