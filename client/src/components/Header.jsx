import React from 'react';

// --- SVG Icons (No changes here) ---
const SearchIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> );
const HeartIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> );
const ShoppingBagIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> );
const UserIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> );


const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex-1">
            <a href="/" className="text-3xl font-semibold tracking-wider text-slate-800">
              NEXUS
            </a>
          </div>
          <nav className="hidden md:flex flex-1 justify-center items-center">
            <ul className="flex items-center space-x-8">
              <li>
                {/* New pink hover color */}
                <a href="/products" className="text-slate-600 font-medium tracking-wide hover:text-pink-500 transition-colors duration-300">
                  Retail
                </a>
              </li>
              <li>
                <a href="/wholesale" className="text-slate-600 font-medium tracking-wide hover:text-pink-500 transition-colors duration-300">
                  Wholesale
                </a>
              </li>
              <li>
                <a href="/deals" className="text-slate-600 font-medium tracking-wide hover:text-pink-500 transition-colors duration-300">
                  Deals
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex-1 flex justify-end items-center">
            <div className="flex items-center space-x-5 text-slate-500">
              {/* New pink hover color */}
              <button className="hover:text-pink-500 transition-colors duration-300"><SearchIcon /></button>
              <a href="/wishlist" className="hover:text-pink-500 transition-colors duration-300"><HeartIcon /></a>
              <a href="/cart" className="hover:text-pink-500 transition-colors duration-300"><ShoppingBagIcon /></a>
              <a href="/account" className="hover:text-pink-500 transition-colors duration-300"><UserIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;