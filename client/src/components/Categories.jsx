import React from 'react';
import CategoryCard from './CategoryCard';

// Mock data for categories. Replace with your actual data later.
const mockCategories = [
  {
    name: 'Women\'s Apparel',
    imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa6ce6702e?q=80&w=1887&auto=format&fit=crop',
    link: '/category/womens-apparel'
  },
  {
    name: 'Men\'s Footwear',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d34?q=80&w=1887&auto=format&fit=crop',
    link: '/category/mens-footwear'
  },
  {
    name: 'Accessories',
    imageUrl: 'https://images.unsplash.com/photo-1579572331145-5e53b299c8c3?q=80&w=1887&auto=format&fit=crop',
    link: '/category/accessories'
  },
  {
    name: 'Kids Collection',
    imageUrl: 'https://images.unsplash.com/photo-1604467795338-02b2c26ay2e71?q=80&w=1887&auto=format&fit=crop',
    link: '/category/kids'
  }
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">Shop by Category</h2>
        <p className="mt-2 text-slate-600">Explore our curated collections.</p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockCategories.map((category) => (
          <CategoryCard 
            key={category.name}
            imageUrl={category.imageUrl}
            categoryName={category.name}
            link={category.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;