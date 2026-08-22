import React from "react";
import Zara from "../../../assets/zara.png";
import Gucci from "../../../assets/gucci.png";
import Prada from "../../../assets/prada.png";

const BrandBar = () => {
  return (
    <section className="w-full bg-black flex justify-center" id="brands">
      <div className="w-[90%]">

        {/* Mobile */}
        <div className="lg:hidden py-5">
          <div className="grid grid-cols-3 gap-y-5 items-center">

            <div className="flex justify-center">
              <h1 className="text-xl font-light tracking-wide uppercase text-white">
                VERSACE
              </h1>
            </div>

            <div className="flex justify-center">
              <img
                src={Zara}
                alt="Zara"
                className="h-8 object-contain"
              />
            </div>

            <div className="flex justify-center">
              <img
                src={Gucci}
                alt="Gucci"
                className="h-9 object-contain"
              />
            </div>

            <div className="col-span-3 flex justify-center gap-10 items-center">

              <h1 className="text-2xl font-bold text-white uppercase tracking-widest" style={{ fontFamily: "Bodoni Moda" }} >
                PRADA
              </h1>

              <h1 className="text-2xl font-light text-white whitespace-nowrap">
                Calvin Klein
              </h1>

            </div>

          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex justify-between items-center py-6">

          <h1 className="text-2xl font-light tracking-wide uppercase text-white">
            VERSACE
          </h1>

          <img
            src={Zara}
            alt="Zara"
            className="h-10 object-contain"
          />

          <img
            src={Gucci}
            alt="Gucci"
            className="h-11 object-contain"
          />

          <h1 className="text-2xl font-bold text-white uppercase tracking-[0.3em]" style={{ fontFamily: "Bodoni Moda" }} >
           PRADA
          </h1>

          <h1 className="text-2xl font-light text-white whitespace-nowrap">
            Calvin Klein
          </h1>

        </div>

      </div>
    </section>
  );
};

export default BrandBar;