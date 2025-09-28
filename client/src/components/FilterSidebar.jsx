import React, { useState } from 'react';

const mockCategories = ['Apparel', 'Footwear', 'Accessories', 'Watches', 'Bags'];

const FilterSidebar = () => {
  const [price, setPrice] = useState(5000);

  return (
    <aside className="lg:w-1/4">
      <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Filters</h2>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="font-semibold text-slate-700 mb-4">Category</h3>
          <ul className="space-y-3">
            {mockCategories.map((category) => (
              <li key={category} className="flex items-center">
                <input 
                  type="checkbox" 
                  id={category} 
                  className="h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500" 
                />
                <label htmlFor={category} className="ml-3 text-slate-600">
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Filter */}
        <div className="mb-8">
          <h3 className="font-semibold text-slate-700 mb-4">Price Range</h3>
          <input 
            type="range" 
            min="500" 
            max="10000" 
            step="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="mt-3 text-center text-slate-600">
            Up to <span className="font-semibold text-slate-800">₹{Number(price).toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Sorting Options */}
        <div className="mb-8">
          <h3 className="font-semibold text-slate-700 mb-4">Sort By</h3>
          <select className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option>Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Apply Filters Button */}
        <div>
          <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity">
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;