import React from "react";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:scale-105 transition">
      <img src={image} alt={title} className="rounded-lg mb-3 w-full" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-orange-600">{price}</p>
    </div>
  );
};

export default ProductCard;
