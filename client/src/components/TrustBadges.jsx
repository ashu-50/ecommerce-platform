import React from 'react';

// --- SVG Icons for Badges ---
const SecurePaymentIcon = () => (
    <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.606 11.955 11.955 0 019 2.606 12.02 12.02 0 00-2.382-9.008z" />
    </svg>
);
const EasyReturnsIcon = () => (
    <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5" />
    </svg>
);
const FastShippingIcon = () => (
    <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16h2l2 2v-8.342A1 1 0 0020.342 9H17v7z" />
    </svg>
);
const CustomerSupportIcon = () => (
    <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TrustBadges = () => {
  return (
    <section className="bg-white py-12 rounded-2xl shadow-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="flex flex-col items-center">
            <SecurePaymentIcon />
            <h3 className="mt-4 font-semibold text-slate-800">Secure Payments</h3>
            <p className="mt-1 text-sm text-slate-500">100% secure transaction</p>
          </div>

          <div className="flex flex-col items-center">
            <EasyReturnsIcon />
            <h3 className="mt-4 font-semibold text-slate-800">Easy Returns</h3>
            <p className="mt-1 text-sm text-slate-500">Hassle-free return policy</p>
          </div>

          <div className="flex flex-col items-center">
            <FastShippingIcon />
            <h3 className="mt-4 font-semibold text-slate-800">Fast Shipping</h3>
            <p className="mt-1 text-sm text-slate-500">Delivered to your doorstep</p>
          </div>

          <div className="flex flex-col items-center">
            <CustomerSupportIcon />
            <h3 className="mt-4 font-semibold text-slate-800">24/7 Support</h3>
            <p className="mt-1 text-sm text-slate-500">We're here to help</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBadges;