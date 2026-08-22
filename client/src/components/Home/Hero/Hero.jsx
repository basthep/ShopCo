import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../../assets/hero.png";

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F2F0F1] flex justify-center">
      <div className="w-[90%] flex flex-col lg:flex-row items-center justify-between">

        {/* Left Section */}
        <div className="w-full lg:w-1/2 py-12 lg:py-16">

          <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl font-extrabold leading-none tracking-tight text-left">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <p className="mt-6 text-gray-500 text-base leading-7 max-w-lg text-left">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <button className="mt-8 w-full lg:w-52 h-14 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition"
           onClick={() => {  
            navigate("/category");
           }}
          >
            Shop Now
          </button>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-2 gap-y-8 lg:flex lg:gap-8">

            {/* 200+ */}
            <div className="text-center pr-4 border-r border-gray-300 lg:border-r-0">
              <h2 className="text-3xl lg:text-4xl font-bold">200+</h2>
              <p className="text-gray-500 text-sm lg:text-base">
                International Brands
              </p>
            </div>

            {/* 2,000+ */}
            <div className="text-center pl-4 lg:border-l border-gray-300 lg:pl-8">
              <h2 className="text-3xl lg:text-4xl font-bold">2,000+</h2>
              <p className="text-gray-500 text-sm lg:text-base">
                High-Quality Products
              </p>
            </div>

            {/* 30,000+ */}
            <div className="col-span-2 flex justify-center lg:block lg:col-span-1 lg:border-l border-gray-300 lg:pl-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  30,000+
                </h2>
                <p className="text-gray-500 text-sm lg:text-base">
                  Happy Customers
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-28">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-162.5 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;