import React from "react";

const MadeForEveryone = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
          {/* Left side - images */}
          <div className="order-2 lg:order-1">
            <div className="w-full h-80 sm:h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/assets/madeforeverone.PNG"
                alt="Made for everyone - diverse representation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right side - content */}
          <div className="space-y-3 sm:space-y-4 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">
              MADE TO PLUMP, MADE FOR EVERYONE
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We believe in empowering you to feel confident in your skin and believe that everyone should be able to achieve their dream pout. Our clinically proven, vegan and cruelty-free products mean you can always feel good about what you're putting on your lips.
            </p>
            <button className="bg-orange-500 text-white px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold hover:bg-orange-600 transition-colors w-full sm:w-auto rounded-full">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeForEveryone;
