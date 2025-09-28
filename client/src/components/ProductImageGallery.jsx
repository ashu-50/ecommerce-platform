import React, { useState } from 'react';

const ProductImageGallery = ({ images }) => {
  // If no images are provided, return null or a placeholder
  if (!images || images.length === 0) {
    return <div className="bg-slate-200 h-[500px] rounded-xl flex items-center justify-center">No Image</div>;
  }

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image with Zoom on Hover */}
      <div className="h-[500px] bg-white rounded-xl shadow-sm overflow-hidden group">
        <img 
          src={mainImage} 
          alt="Main product" 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg cursor-pointer overflow-hidden border-2 ${mainImage === image ? 'border-pink-500' : 'border-transparent'}`}
            onClick={() => setMainImage(image)}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;