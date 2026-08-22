import React from "react";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const FooterSection = () => {
  return (
    <section className="relative mt-24">

      {/* Newsletter */}
      <div className="relative z-20">
        <Newsletter />
      </div>

      {/* Footer */}
      <div className="-mt-24">
        <Footer />
      </div>

    </section>
  );
};

export default FooterSection;