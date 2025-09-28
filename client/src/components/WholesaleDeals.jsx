import React from 'react';

// Mock data for featured wholesale deals
const mockDeals = [
  {
    name: 'Premium Cotton Tees',
    imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop',
    price: '499',
    moq: '50 units',
    link: '/deals/premium-tees'
  },
  {
    name: 'Classic Denim Jackets',
    imageUrl: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1950&auto=format&fit=crop',
    price: '1,299',
    moq: '25 units',
    link: '/deals/denim-jackets'
  },
];

const WholesaleDeals = () => {
  return (
    <section className="py-16 bg-white rounded-2xl shadow-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">Featured Wholesale Deals</h2>
          <p className="mt-2 text-slate-600">Exclusive bulk pricing for our business partners.</p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockDeals.map((deal) => (
            <div key={deal.name} className="flex flex-col sm:flex-row bg-slate-50 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              
              {/* Image Section */}
              <div className="sm:w-2/5 h-64 sm:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${deal.imageUrl})` }}>
              </div>
              
              {/* Content Section */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-semibold bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
                    Min. {deal.moq}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-slate-800">{deal.name}</h3>
                  <p className="mt-2 text-slate-600">
                    Starting at <span className="font-bold text-slate-800">₹{deal.price}</span> / unit
                  </p>
                </div>
                <div className="mt-6">
                  <a 
                    href={deal.link} 
                    className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:opacity-90"
                  >
                    View Deal
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WholesaleDeals;