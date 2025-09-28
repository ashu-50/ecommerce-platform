import React from 'react';

// An SVG quote icon for a nice visual touch
const QuoteIcon = () => (
    <svg className="w-10 h-10 text-pink-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);


// Mock data for testimonials.
const mockTestimonials = [
  {
    quote: "The quality is absolutely top-notch. My customers love the new collection we sourced from Nexus. The wholesale process was seamless!",
    name: "Priya Sharma",
    title: "Boutique Owner",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "I'm so impressed with the fabric and fit. I've already placed my second order. Fast shipping and great customer service.",
    name: "Rohan Verma",
    title: "Retail Customer",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Finally, a supplier that understands quality and design. Nexus has become our go-to for stocking our seasonal inventory.",
    name: "Anjali Mehta",
    title: "Wholesale Partner",
    imageUrl: "https://randomuser.me/api/portraits/women/17.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">What Our Customers Say</h2>
          <p className="mt-2 text-slate-600">Real stories from our valued partners and clients.</p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestimonials.map((testimonial) => (
            <figure key={testimonial.name} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-grow">
                <QuoteIcon />
                <p className="mt-6 text-slate-600">"{testimonial.quote}"</p>
              </div>
              <figcaption className="mt-6 flex items-center space-x-4">
                <img className="w-14 h-14 rounded-full object-cover" src={testimonial.imageUrl} alt={testimonial.name} />
                <div>
                  <div className="font-semibold text-slate-800">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;