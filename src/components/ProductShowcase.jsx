import React from "react";

const ProductShowcase = () => {
  return (
    <section className="bg-white py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-orange-custom text-white px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide">
                TRENDING ON TIKTOK
              </div>
            </div>
            
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-pink-200 to-red-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-32 h-32 bg-pink-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">💋</span>
                  </div>
                  <p className="text-sm">Lip Product Effect Image</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                YOUR LIPS<br />
                BUT JUICIER
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="max-w-md mx-auto lg:mx-0">
              <div className="mb-6">
                <div className="w-24 h-16 bg-gradient-to-r from-transparent to-pink-100 rounded-lg border border-gray-200 flex items-center justify-center">
                  <div className="w-16 h-8 bg-pink-200 rounded-full opacity-60"></div>
                </div>
              </div>
              
              <div className="flex justify-end mb-6">
                <button className="w-12 h-12 bg-orange-custom text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2">
                  PLUMP JUICE
                </h3>
                <p className="text-lg text-gray-600 mb-2">
                  Coconut • Clear
                </p>
                <p className="text-2xl font-bold text-black">
                  £18.00
                </p>
              </div>
              
              <button className="w-full bg-orange-custom text-white py-4 px-8 rounded-full text-lg font-semibold uppercase tracking-wide hover:bg-orange-600 transition-colors">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-12 rounded-2xl">
          <div className="text-center">
            <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-8">
              FEATURED IN
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 items-center justify-items-center">
              <div className="text-orange-custom font-bold text-xl lg:text-2xl xl:text-3xl">Fabulous</div>
              <div className="text-orange-custom font-bold text-xl lg:text-2xl xl:text-3xl">Closer</div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-custom text-white rounded-full flex items-center justify-center font-bold text-base lg:text-lg">
                  29
                </div>
                <span className="text-orange-custom font-bold text-lg lg:text-xl xl:text-2xl">REFINERY29</span>
              </div>
              <div className="text-orange-custom font-bold text-xl lg:text-2xl xl:text-3xl">Mail Online</div>
              <div className="text-orange-custom font-bold text-xl lg:text-2xl xl:text-3xl">this morning</div>
              <div className="text-orange-custom font-bold text-xl lg:text-2xl xl:text-3xl">COSMOPOLITAN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
