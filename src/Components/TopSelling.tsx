import React from "react";
import { Star } from "lucide-react";
import Image from 'next/image'; // Import Image from next/image

const TopSelling = () => {
  const products = [
    {
      id: 1,
      name: "Striped Shirt",
      image: "/stripedshirt.png", // Replace with your image paths
      rating: 5,
      price: 99.99,
    },
    {
      id: 2,
      name: "T-Shirt",
      image: "/t-shirt1.png",
      rating: 4.5,
      price: 79.99,
    },
    {
      id: 3,
      name: "Black Jeans",
      image: "/lackjeans.png",
      rating: 4,
      price: 59.99,
    },
    {
      id: 4,
      name: "Shorts",
      image: "/shorts.png",
      rating: 3.5,
      price: 39.99,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 overflow-hidden">
      <h2 className="text-2xl font-extrabold text-center mb-8">Top Selling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-4 transition transform hover:scale-105 hover:shadow-xl"
          >
            {/* Replace <img> with <Image /> for optimization */}
            <Image
              src={product.image}
              alt={product.name}
              width={295}  // Add width for Next.js Image optimization
              height={298} // Add height for Next.js Image optimization
              className="object-cover rounded"
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
        <button className="px-6 py-2 bg-black text-white rounded hover:bg-[#f2f0f1] hover:text-black transition transform hover:scale-105">
          View All
        </button>
      </div>
    </section>
  );
};

export default TopSelling;
