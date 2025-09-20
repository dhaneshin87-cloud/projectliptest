import React from "react";

const PlumpingKits = () => {
  const kits = [
    {
      name: "THE FULL WORKS",
      description: "Plump lips & provide",
      price: "£42.00",
      originalPrice: "£52.00",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop"
    },
    {
      name: "FILTER FREE",
      description: "Instantly plump & provide", 
      price: "£33.00",
      originalPrice: "£39.00",
      discount: "15% OFF",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop"
    },
    {
      name: "PLUMP & FILL LINER BUNDLES",
      description: "Plumping lip liner",
      price: "£18.00", 
      originalPrice: "£22.00",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">PLUMPING KITS</h2>
          <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold hover:bg-orange-600 transition-colors w-full sm:w-auto rounded-full">
            SHOP ALL KITS
          </button>
        </div>
        
        <div className="relative">
          <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide">
            {kits.map((kit, index) => (
              <div key={index} className="flex-shrink-0 w-72 sm:w-80 bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="relative mb-4">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={kit.image}
                      alt={kit.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                    {kit.discount}
                  </div>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{kit.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{kit.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-500 font-bold text-base sm:text-lg">{kit.price}</span>
                  <span className="text-gray-400 line-through text-sm">{kit.originalPrice}</span>
                </div>
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

export default PlumpingKits;
