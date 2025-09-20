import React from "react";

const SocialMedia = () => {
  const posts = [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop"
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold text-orange-600 px-4 py-2 rounded-lg">@PROJECT_COSMETICS</h2>
          <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors rounded-full px-4 py-2 border border-orange-500 hover:bg-orange-500 hover:text-white">
            FOLLOW US
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={post}
                alt={`Social media post ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
