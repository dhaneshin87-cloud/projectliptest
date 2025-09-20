import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-orange-500 text-white text-center py-2 text-xs sm:text-sm font-medium">
        FREE UK SHIPPING ON ORDERS OVER £40
      </div>
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <nav className="hidden md:flex">
              <div className="px-6 py-2 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                <div className="flex space-x-6 font-medium text-sm items-center">
                  <a href="#" className="hover:text-orange-500 transition-colors">SHOP</a>
                  <a href="#" className="hover:text-orange-500 transition-colors">ABOUT</a>
                  <a href="#" className="hover:text-orange-500 transition-colors">LEARN</a>
                </div>
              </div>
            </nav>
            
            <div className="text-2xl sm:text-3xl font-bold text-orange-500">PROJECT</div>
            
            <div className="flex space-x-3 sm:space-x-4">
              <button className="px-2 py-1 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors font-medium text-sm">
                SEARCH
              </button>
              <button className="px-2 py-1 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors font-medium text-sm relative">
                CART
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <div className="px-6 py-3 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                  <div className="flex flex-col space-y-3 font-medium text-sm text-center">
                    <a href="#" className="hover:text-orange-500 transition-colors">SHOP</a>
                    <a href="#" className="hover:text-orange-500 transition-colors">ABOUT</a>
                    <a href="#" className="hover:text-orange-500 transition-colors">LEARN</a>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors font-medium text-sm flex-1">
                    SEARCH
                  </button>
                  <button className="px-4 py-2 rounded-full border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors font-medium text-sm flex-1 relative">
                    CART
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
