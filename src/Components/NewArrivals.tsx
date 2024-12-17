import React from "react";
import { Star } from "lucide-react";

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      image: "/t-shirt.png",
      rating: 4,
      price: 49.99,
    },
    {
      id: 2,
      name: "Jeans",
      image: "/jeans.png",
      rating: 5,
      price: 69.99,
    },
    {
      id: 3,
      name: "Checked Shirt",
      image: "/checked shirt.png",
      rating: 3,
      price: 29.99,
    },
    {
      id: 4,
      name: "Shirt",
      image: "/shirt.png",
      rating: 4.5,
      price: 89.99,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 overflow-hidden">
      <h2 className="text-2xl font-extrabold text-center mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-4 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-[298px] w-[295px] object-cover rounded"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-[#f2f0f1] hover:text-black hover:font-extrabold  transition transform hover:scale-105">
          View All
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
