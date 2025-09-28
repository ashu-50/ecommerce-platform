import React from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar'; // 1. Import the new component

const mockProducts = [
  // ... (mockProducts array remains the same)
  { name: 'Elegant High-Neck Blouse', price: 2499, discountPrice: 1999, imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto-format&fit=crop', link: '/product/1' },
  { name: 'Classic Leather Loafers', price: 3999, discountPrice: null, imageUrl: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1931&auto=format&fit=crop', link: '/product/2' },
  { name: 'Modern Aviator Sunglasses', price: 1899, discountPrice: 1499, imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop', link: '/product/3' },
  { name: 'Slim Fit Denim Jeans', price: 2999, discountPrice: null, imageUrl: 'https://images.unsplash.com/photo-1602293589914-9e29544ddd5b?q=80&w=1887&auto-format&fit=crop', link: '/product/4' },
  { name: 'Minimalist Wrist Watch', price: 7999, discountPrice: 5999, imageUrl: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1888&auto=format&fit=crop', link: '/product/5' },
  { name: 'Cozy Knit Sweater', price: 3499, discountPrice: null, imageUrl: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=1887&auto-format&fit=crop', link: '/product/6' },
];


const ProductListPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* We can add a search bar here later */}
      <h1 className="text-4xl font-bold text-slate-800 mb-8">All Products</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* 2. Replace the old <aside> with the new component */}
        <FilterSidebar />

        {/* Product Grid */}
        <main className="lg:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {mockProducts.map((product) => (
              <ProductCard 
                key={product.name}
                name={product.name}
                price={product.price}
                discountPrice={product.discountPrice}
                imageUrl={product.imageUrl}
                link={product.link}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductListPage;