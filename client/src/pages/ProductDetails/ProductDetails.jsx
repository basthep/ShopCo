import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import OfferDisplay from "../../components/OfferDisplay/OfferDisplay";
import ProductBreadcrumb from "../../components/ProductDetails/ProductBreadcrumb/ProductBreadcrumb";
import ProductGallery from "../../components/ProductDetails/ProductGallery/ProductGallery";
import ProductInfo from "../../components/ProductDetails/ProductInfo/ProductInfo";
import ProductTabs from "../../components/ProductDetails/ProductTabs/ProductTabs";
import SuggestedProducts from "../../components/ProductDetails/SuggestedProducts/SuggestedProducts";
import FooterSection from "../../components/FooterSection/FooterSection";

import {
  getProductById,
  getReviewsByProductId,
  getFaqsByProductId,
} from "../../services/productService";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [faqs, setFaqs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError("");

        // Get product
        const productData = await getProductById(id);

        // Get reviews
        const reviewsData = await getReviewsByProductId(id);

        // Get FAQs
        const faqsData = await getFaqsByProductId(id);

        const product = productData.product;

        // Prepare product data
        const productWithImages = {
          ...product,

          images: product.images.map(
            (image) =>
              `http://localhost:5000/images/${image}`
          ),

          reviews: reviewsData.reviews || [],
          faqs: faqsData.faqs || [],
        };

        // Store product
        setProduct(productWithImages);

        // Store reviews
        setReviews(reviewsData.reviews || []);

        // Store FAQs
        setFaqs(faqsData.faqs || []);
      } catch (error) {
        console.error(
          "Error loading product:",
          error
        );

        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">
          Loading product...
        </p>
      </div>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">
          {error || "Product not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <OfferDisplay />

      <Navbar />

      {/* Breadcrumb */}
      <ProductBreadcrumb product={product} />

      {/* Product Section */}
      <section className="w-full flex justify-center">
        <div
          className="
            w-[90%]
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-start
          "
        >
          <ProductGallery product={product} />

          <ProductInfo product={product} />
        </div>
      </section>

      {/* Product Tabs */}
      <ProductTabs
        product={product}
        reviews={reviews}
        faqs={faqs}
      />

      {/* Suggested Products */}
      <SuggestedProducts />

      <FooterSection />
    </div>
  );
};

export default ProductDetails;