import React from "react";

const BestInPlump = () => {
  const products = [
    {
      name: "PLUMP JUICE",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
      price: "£22"
    },
    {
      name: "PLUMP JUICE",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop", 
      price: "£22"
    },
    {
      name: "EXTREME MATTE PLUMPING PRIMER",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      price: "£18"
    },
    {
      name: "PLUMP & FILL",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
      price: "£15"
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-8 sm:mb-12 text-center lg:text-left">BEST IN PLUMP</h2>
        
        <div className="relative">
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-48 sm:w-56 lg:w-64">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-2">{product.name}</h3>
                <p className="text-orange-500 font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
          
          <button className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestInPlump;
