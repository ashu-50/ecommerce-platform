import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white rounded-2xl shadow-sm">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Animate the text column */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 
              className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight opacity-0 animate-fade-in-up"
            >
              Curated Styles,
              <br />
              Unbeatable Value.
            </h1>
            <p 
              className="mt-6 text-lg text-slate-600 max-w-lg mx-auto md:mx-0 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Discover premium collections for your personal wardrobe or your business. Quality and design, delivered for both retail and wholesale.
            </p>
            <div 
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <a href="/retail" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-transform hover:scale-105">
                Shop Retail
              </a>
              <a href="/wholesale" className="bg-white text-slate-700 font-semibold px-8 py-3 rounded-xl shadow-md border border-slate-200 transition-transform hover:scale-105 hover:bg-slate-100">
                Shop Wholesale
              </a>
            </div>
          </div>

          {/* Animate the image column */}
          <div 
            className="md:w-1/2 mt-10 md:mt-0 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="bg-slate-200 h-96 w-full rounded-2xl shadow-lg bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1579572331145-5e53b299c8c3?q=80&w=1887&auto=format&fit=crop')`}}>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;