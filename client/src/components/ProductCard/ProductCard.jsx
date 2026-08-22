import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="min-w-55 lg:min-w-0 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Product Image */}
      <div
        className="
          w-full
          h-55
          sm:h-62.5
          md:h-70
          lg:h-80
          bg-[#F2F0F1]
          rounded-2xl
          overflow-hidden
          flex
          items-center
          justify-center
        "
      >
        <img
          src={ product.images?.[0]
      ? `http://localhost:5000/images/${product.images[0]}`
      : ""}
          alt={product.name}
          className="
            w-[85%]
            h-[85%]
            lg:w-full
            lg:h-full
            object-contain
            lg:object-cover
          "
        />
      </div>

      {/* Product Name */}
      <h3 className="mt-3 text-lg font-semibold">
        {product.name}
      </h3>

      {/* Rating */}
      <div className="flex items-center mt-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            fill={
              index < Math.floor(product.rating)
                ? "#FFC633"
                : "none"
            }
            color="#FFC633"
          />
        ))}

        <span className="ml-2 text-sm text-gray-600">
          {product.rating}/5
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mt-1 mb-2 flex-wrap">
        {product.offer_price ? (
          <>
            <span className="text-2xl font-bold text-black">
              ${product.offer_price}
            </span>

            <span className="text-xl text-gray-400 line-through">
              ${product.price}
            </span>

            {product.offer && (
              <span className="px-3 py-1 text-xs font-medium text-red-500 bg-red-100 rounded-full">
                -{product.offer}%
              </span>
            )}
          </>
        ) : (
          <span className="text-2xl font-bold text-black">
            ${product.price}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;