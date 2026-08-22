import { useState,useEffect } from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { getProducts } from "../../../services/productService";
 
const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);
const [products, setProducts] = useState([]);

  useEffect(() => {

    const loadProducts = async () => {

        try {

            const data =
                await getProducts();

            setProducts(data.products);
            console.log(data)

        } catch (error) {

            console.error(error);

        }

    };

    loadProducts();

}, []);

  return (
    <section className="w-full flex justify-center py-16" id="top-selling">
      <div className="w-[90%]">

        <h1 className="text-4xl font-extrabold text-center mb-10">
          TOP SELLING
        </h1>

        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible scrollbar-hide">

          {(showAll ? products : products.slice(8, 12)).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-3 border border-gray-300 rounded-full font-medium hover:bg-black hover:text-white transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>

      </div>
    </section>
  );
};

export default TopSelling;