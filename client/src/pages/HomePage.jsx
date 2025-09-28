import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import WholesaleDeals from '../components/WholesaleDeals';
import Testimonials from '../components/Testimonials';
import TrustBadges from '../components/TrustBadges';

const HomePage = () => {
  return (
    <main className="container mx-auto p-6 space-y-12">
      <Hero />
      <Categories />
      <WholesaleDeals />
      <Testimonials />
      <TrustBadges />
    </main>
  );
};

export default HomePage;