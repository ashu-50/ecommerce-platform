import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-12 text-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold tracking-wider">NEXUS</h3>
            <p className="mt-4 text-slate-500 text-sm">
              Premium quality for retail and wholesale.
            </p>
            <div className="mt-6">
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-slate-600">
                Join our newsletter
              </label>
              <div className="flex mt-2 shadow-sm rounded-xl">
                <input 
                  type="email" 
                  id="newsletter-email"
                  placeholder="Your email" 
                  className="w-full px-4 py-2 text-slate-800 border border-slate-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {/* New eye-catching gradient button */}
                <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-4 rounded-r-xl transition-opacity hover:opacity-90">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold tracking-wide text-slate-700">Shop</h4>
            <ul className="mt-4 space-y-3">
              {/* New pink hover color */}
              <li><a href="/retail" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">Retail Collection</a></li>
              <li><a href="/wholesale" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">Wholesale Catalog</a></li>
              <li><a href="/deals" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">Today's Deals</a></li>
              <li><a href="/categories" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">All Categories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wide text-slate-700">About</h4>
            <ul className="mt-4 space-y-3">
                <li><a href="/about" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">Our Story</a></li>
                <li><a href="/careers" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">Careers</a></li>
                <li><a href="/press" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold tracking-wide text-slate-700">Support</h4>
            <ul className="mt-4 space-y-3">
                <li><a href="/contact" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">Contact Us</a></li>
                <li><a href="/faq" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">FAQ</a></li>
                <li><a href="/returns" className="text-slate-500 hover:text-pink-500 text-sm transition-colors">Return Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-100">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Nexus. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;