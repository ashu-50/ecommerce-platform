import React from 'react';
import ProductCard from './ProductCard';

// We'll use the same mock data for now. In a real app, the API would provide related items.
const mockRelatedProducts = [
  {
    name: 'Classic Leather Loafers',
    price: 3999,
    discountPrice: null,
    imageUrl: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1931&auto-format&fit=crop',
    link: '/product/2'
  },
  {
    name: 'Modern Aviator Sunglasses',
    price: 1899,
    discountPrice: 1499,
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop',
    link: '/product/3'
  },
  {
    name: 'Slim Fit Denim Jeans',
    price: 2999,
    discountPrice: null,
    imageUrl: 'https://images.unsplash.com/photo-1602293589914-9e29544ddd5b?q=80&w=1887&auto=format&fit=crop',
    link: '/product/4'
  },
  {
    name: 'Minimalist Wrist Watch',
    price: 7999,
    discountPrice: 5999,
    imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto-format&fit=crop',
    link: '/product/5'
  },
];


const RelatedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">You Might Also Like</h2>
        
        {/* Horizontally Scrolling Container */}
        <div className="flex space-x-8 overflow-x-auto pb-4">
          {mockRelatedProducts.map((product) => (
            // We set a specific width here so the cards don't collapse
            <div key={product.name} className="flex-shrink-0 w-80">
              <ProductCard 
                name={product.name}
                price={product.price}
                discountPrice={product.discountPrice}
                imageUrl={product.imageUrl}
                link={product.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;