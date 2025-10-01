import React from 'react';

const SplitScreenHero = () => {
  return (
    // The updated gradient background is applied here
    <div className="md:flex h-[90vh] bg-gradient-to-br from-sky-100 to-cyan-100">
      
      {/* Retail Section */}
      <div 
        className="group relative w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center text-center text-white bg-cover bg-center transition-all duration-500 ease-in-out hover:w-full md:hover:w-3/5"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="relative z-10 p-8">
          <h2 className="text-4xl font-bold mb-4 text-white">For Your Wardrobe</h2>
          <p className="mb-6 max-w-sm text-white">Curated styles and premium collections for your personal expression.</p>
          <a href="/retail" className="border-2 border-white px-8 py-3 font-semibold transition-colors hover:bg-white hover:text-black">
            Shop Retail
          </a>
        </div>
      </div>

      {/* Wholesale Section */}
      <div 
        className="group relative w-full h-1/2 md:h-full md:w-1/2 flex items-center justify-center text-center text-white bg-cover bg-center transition-all duration-500 ease-in-out hover:w-full md:hover:w-3/5"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
        <div className="relative z-10 p-8">
          <h2 className="text-4xl font-bold mb-4 text-white">For Your Business</h2>
          <p className="mb-6 max-w-sm text-white">Equip your store with high-quality designs that sell.</p>
          <a href="/wholesale" className="border-2 border-white px-8 py-3 font-semibold transition-colors hover:bg-white hover:text-black">
            Shop Wholesale
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default SplitScreenHero;
