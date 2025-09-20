import React from "react";

const ProductsProven = () => {
  const productSwatches = [
    { 
      src: "/assets/Placement_Area1.png", 
      alt: "Orange scrub/balm"
    },
    { 
      src: "/assets/Placement_Area_ad738f53-e512-46e8-bd01-ff49708c6eb2.png", 
      alt: "Peach lip gloss"
    },
    { 
      src: "/assets/Placement_Area_c1acb99c-eeac-4c52-9b62-a4b565a06160.png", 
      alt: "Cream balm"
    },
    { 
      src: "/assets/Placement_Area1 (1).webp", 
      alt: "White cream"
    },
    { 
      src: "/assets/Placement_Area2.webp", 
      alt: "Clear gel"
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center gap-2 sm:gap-4 mb-12">
          {productSwatches.map((product, index) => (
            <div key={index} className="flex-1">
              <div className="w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-500 mb-6 tracking-wide">
            PRODUCTS PROVEN TO PLUMP
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Clean, conscious and clinically proven, our plumpers deliver real results so you can plump up your beauty, naturally.
          </p>
         
          <button className="bg-orange-500 text-white px-8 py-4 text-lg font-semibold hover:bg-orange-600 transition-colors rounded-full">
            SEE THE RESULTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsProven;
