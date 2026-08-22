import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="w-full flex justify-center relative z-10">
      <div className="w-[90%] bg-black rounded-3xl px-6 py-8 lg:px-14 lg:py-10">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-white text-2xl lg:text-4xl font-extrabold leading-tight uppercase">
              STAY UPTO DATE ABOUT 
              <br />
              OUR LATEST OFFERS
            </h1>
          </div>

          {/* Right */}
          <div className="w-full lg:w-105 flex flex-col gap-4">

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-14 rounded-full bg-white pl-12 pr-5 outline-none text-gray-700"
              />

            </div>

            <button className="w-full h-14 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition">
              Subscribe to Newsletter
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;