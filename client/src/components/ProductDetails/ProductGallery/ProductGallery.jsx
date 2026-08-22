import React, { useState } from "react";
 

const ProductGallery = ({ product }) => {

  const images = product.images;  
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full lg:w-full">
      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-4">
        
        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-3 justify-center lg:justify-start">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`w-40 h-34 lg:w-38 lg:h-44 rounded-2xl overflow-hidden border-2 transition ${
                selectedImage === img
                  ? "border-black"
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover bg-[#F2F0F1]"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 bg-[#F2F0F1] rounded-3xl p-6 flex items-center justify-center min-h-105 lg:min-h-132.5">
          <img
            src={selectedImage}
            alt="Selected product"
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;