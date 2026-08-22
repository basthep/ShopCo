import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/productService";

const ProductGrid = ({ filters }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadProducts = async () => {

      try {

        setLoading(true);

        const data = await getProducts(filters);
        console.log(data.products); 

        setProducts(data.products || data);

      } catch (error) {

        console.error(
          "Error loading products:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    loadProducts();

  }, [
      filters.style,
      filters.category,
      filters.size,
      filters.color,
      filters.minPrice,
      filters.maxPrice,
  ]);

  if (loading) {
    return (
      <div className="py-10 text-center">
        Loading products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="py-10 text-center text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
};

export default ProductGrid;