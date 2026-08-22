import React from "react";
import { useNavigate } from "react-router-dom";

import Casual from "../../../assets/casual.jpg";
import Formal from "../../../assets/formal.png";
import Party from "../../../assets/party.png";
import Gym from "../../../assets/gym.png";

const BrowseByDressStyle = () => {
  const navigate = useNavigate();

  const dressStyles = [
    {
      name: "Casual",
      image: Casual,
      desktopClass: "col-span-2",
    },
    {
      name: "Formal",
      image: Formal,
      desktopClass: "col-span-3",
    },
    {
      name: "Party",
      image: Party,
      desktopClass: "col-span-3",
    },
    {
      name: "Gym",
      image: Gym,
      desktopClass: "col-span-2",
    },
  ];

  const handleCategoryClick = (style) => {
    navigate(`/category?style=${style}`);
  };

  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-[90%] bg-[#F2F0F1] rounded-[40px] p-6 lg:p-12">

        <h1 className="text-3xl lg:text-5xl font-extrabold text-center mb-10 tracking-tight">
          BROWSE BY DRESS STYLE
        </h1>

        {/* Mobile */}

        <div className="grid gap-4 lg:hidden">

          {dressStyles.map((style) => (

            <div
              key={style.name}
              onClick={() => handleCategoryClick(style.name)}
              className="relative h-44 rounded-3xl overflow-hidden bg-white cursor-pointer"
            >

              <div className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-amber-100 via-yellow-50 to-transparent z-10" />

              <img
                src={style.image}
                alt={style.name}
                className="absolute right-0 top-0 h-full object-contain z-20"
              />

              <h2 className="absolute top-5 left-5 z-30 text-2xl font-bold">
                {style.name}
              </h2>

            </div>

          ))}

        </div>

        {/* Desktop */}

        <div className="hidden lg:grid grid-cols-5 gap-5">

          {dressStyles.map((style) => (

            <div
              key={style.name}
              onClick={() => handleCategoryClick(style.name)}
              className={`${style.desktopClass} relative h-72 rounded-3xl overflow-hidden bg-white group cursor-pointer`}
            >

              <div className="absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-amber-100 via-yellow-50 to-transparent z-10" />

              <img
                src={style.image}
                alt={style.name}
                className="absolute right-0 top-0 h-full object-contain z-20 transition-transform duration-300 group-hover:scale-105"
              />

              <h2 className="absolute top-7 left-7 z-30 text-3xl font-bold">
                {style.name}
              </h2>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default BrowseByDressStyle;