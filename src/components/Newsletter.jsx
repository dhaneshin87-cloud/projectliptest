import React from "react";

const Newsletter = () => {
  return (
    <section className="relative z-30 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white border-2 border-orange-500 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative z-30 transform -translate-y-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left side - Text content */}
            <div className="text-left flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-4 uppercase tracking-wide">
                GET ON THE VIP LIST
              </h2>
              <p className="text-lg sm:text-xl text-orange-500 font-medium">
                Sign up for 15% off and be the first to know about our latest offers & news
              </p>
            </div>
            
            {/* Right side - Form */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
                />
                <button className="w-full bg-orange-500 text-white px-8 py-4 font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg uppercase tracking-wide">
                  SIGN UP
                </button>
                <p className="text-sm text-orange-500 text-center">
                  *By signing up, you agree to our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
