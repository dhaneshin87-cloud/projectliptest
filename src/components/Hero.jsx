import React from "react";

const Hero = () => {
  return (
    <section className="bg-white border-2 border-orange-500 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px]">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left py-8 lg:py-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 leading-tight">
              BIG LIPS, BIGGER ENERGY
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our famous lip liner kits, fills and plumps so you can cheat your way to an instant lip lift.
            </p>
            <button className="bg-orange-500 text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-semibold hover:bg-orange-600 transition-colors w-full sm:w-auto rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              SHOP PLUMP & FILL
            </button>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden h-full min-h-[300px] lg:min-h-[500px]">
              <img
                src="/assets/Rectangle 81.webp"
                alt="Big lips rectangle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
