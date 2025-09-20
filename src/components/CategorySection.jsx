import React from "react";

const CategorySection = () => {
  const categories = [
    {
      title: "SHOP LIP",
      image: "/assets/Placement_Area1.png"
    },
    {
      title: "SHOP FACE", 
      image: "/assets/Placement_Area2.webp"
    },
    {
      title: "SHOP KITS",
      image: "/assets/Placement_Area_ad738f53-e512-46e8-bd01-ff49708c6eb2.png"
    }
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center">{category.title}</h3>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 text-orange-500 text-base sm:text-lg lg:text-xl xl:text-2xl font-medium py-4 px-4">
            <span>CLINICALLY PROVEN TO PLUMP</span>
            <span className="hidden sm:inline">•</span>
            <span>100% NATURAL</span>
            <span className="hidden sm:inline">•</span>
            <span>VEGAN</span>
            <span className="hidden sm:inline">•</span>
            <span>CRUELTY-FREE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
