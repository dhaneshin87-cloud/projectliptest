import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-8 sm:pt-32 sm:pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">SHOP</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-orange-200 transition-colors">Lip</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Face</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Kits</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Shop All</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">ABOUT</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-orange-200 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">Clinically Proven</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">HELP</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-orange-200 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-200 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">CONNECT</h4>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="hover:text-orange-200 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
