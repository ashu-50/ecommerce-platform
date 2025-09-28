import React, { useState } from 'react';

const ProductActions = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount)); // Ensure quantity doesn't go below 1
  };

  return (
    <div className="mt-8">
      {/* Quantity Selector */}
      <div className="flex items-center space-x-4 mb-6">
        <label htmlFor="quantity" className="font-semibold text-slate-700">Quantity:</label>
        <div className="flex items-center border border-slate-300 rounded-lg">
          <button onClick={() => handleQuantityChange(-1)} className="px-4 py-2 font-bold text-lg text-slate-600 hover:bg-slate-100 rounded-l-lg">-</button>
          <input 
            type="text"
            id="quantity"
            value={quantity}
            readOnly // Make the input read-only to be controlled by buttons
            className="w-16 text-center border-l border-r border-slate-300 focus:outline-none"
          />
          <button onClick={() => handleQuantityChange(1)} className="px-4 py-2 font-bold text-lg text-slate-600 hover:bg-slate-100 rounded-r-lg">+</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="flex-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity">
          Add to Cart
        </button>
        <button className="flex-1 bg-white text-slate-800 font-semibold px-8 py-3 rounded-xl shadow-md border border-slate-300 hover:bg-slate-100 transition-colors">
          Buy Now
        </button>
      </div>

      {/* Wholesale Inquiry */}
      <div className="text-center mt-6">
        <a href="/wholesale-inquiry" className="text-sm text-slate-600 hover:text-pink-500 underline transition-colors">
          Looking to buy in bulk? Make a Wholesale Inquiry
        </a>
      </div>
    </div>
  );
};

export default ProductActions;