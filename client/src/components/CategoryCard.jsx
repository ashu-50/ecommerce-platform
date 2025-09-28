import React from 'react';

const CategoryCard = ({ imageUrl, categoryName, link }) => {
  const cardStyle = {
    backgroundImage: `url('${imageUrl}')`
  };

  return (
    <a href={link} className="block group relative rounded-xl overflow-hidden shadow-lg">
      {/* Image and Hover Effect Container */}
      <div 
        className="h-80 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={cardStyle}
      >
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white">
          {categoryName}
        </h3>
      </div>
    </a>
  );
};

export default CategoryCard;