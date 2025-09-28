import React from 'react';

const ProductCard = ({ imageUrl, name, price, discountPrice, link }) => {
  const hasDiscount = discountPrice && discountPrice < price;
  const discountPercentage = hasDiscount 
    ? Math.round(((price - discountPrice) / price) * 100) 
    : 0;

  return (
    <a href={link} className="block group bg-white rounded-xl shadow-sm overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative">
        {/* Image */}
        <div className="h-64 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
        
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            -{discountPercentage}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800 truncate" title={name}>
          {name}
        </h3>
        <div className="mt-2 flex items-center gap-3">
          {hasDiscount ? (
            <>
              <p className="text-xl font-bold text-slate-900">₹{discountPrice.toLocaleString('en-IN')}</p>
              <p className="text-md text-slate-400 line-through">₹{price.toLocaleString('en-IN')}</p>
            </>
          ) : (
            <p className="text-xl font-bold text-slate-900">₹{price.toLocaleString('en-IN')}</p>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;