import { useState,useEffect } from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { getProducts } from "../../../services/productService";
 
const SuggestedProducts = () => {
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
    <section className="w-full flex justify-center py-16">
      <div className="w-[90%]">

        <h1 className="text-4xl font-extrabold text-center mb-10">
          YOU MIGHT ALSO LIKE
        </h1>

        {/* Products */}
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-visible scrollbar-hide">

          {(showAll ? products : products.slice(16, 20)).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
 
      </div>
    </section>
  );
};

export default SuggestedProducts;