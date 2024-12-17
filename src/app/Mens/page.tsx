'use client';
import { useState } from "react";
import Image from 'next/image';

interface Review {
  id: number;
  rating: number;
  comment: string;
  customerName: string;
  isVerified: boolean;
}

const MenClothingPage = () => {
  const [tab, setTab] = useState<"details" | "reviews" | "faqs">("details");

  const reviews: Review[] = [
    { id: 1, rating: 5, comment: "This product exceeded my expectations!", customerName: "John Doe", isVerified: true },
    { id: 2, rating: 4, comment: "Great product, but shipping was slow.", customerName: "Jane Smith", isVerified: false },
  ];

  return (
    <div className="p-6 py-20 overflow-hidden">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span>HOME &gt; SHOP &gt; MEN &gt; T-SHIRTS</span>
      </div>

      {/* Product Section */}
      <div className="flex flex-col lg:flex-row space-x-10">
        {/* Product Images */}
        <div className="flex space-x-4">
          {/* Big Image */}
          <div>
            <Image
              src="/main.png"
              alt="Product Big"
              width={530}
              height={444}
              className="object-cover rounded-lg"
            />
          </div>
          {/* Small Images */}
          <div className="flex flex-col space-y-4">
            <Image
              src="/img11.png"
              alt="Small 1"
              width={167}
              height={152}
              className="object-cover rounded-lg"
            />
            <Image
              src="/img12.png"
              alt="Small 2"
              width={167}
              height={152}
              className="object-cover rounded-lg"
            />
            <Image
              src="/img13.png"
              alt="Small 3"
              width={167}
              height={152}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">Men&apos;s Casual T-Shirt</h1>
          <div className="flex items-center space-x-2">
            ⭐⭐⭐⭐⭐ <span className="text-gray-500">(4.5 out of 5)</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">$29.99</span>
            <span className="text-gray-400 line-through">$49.99</span>
            <span className="text-red-500 font-semibold">-40% OFF</span>
          </div>
          <p className="text-gray-600">
            This high-quality casual t-shirt is perfect for men who want comfort
            and style. Made with 100% cotton for all-day wear.
          </p>

          {/* Color Selector */}
          <div>
            <h2 className="font-bold">Select Colors</h2>
            <div className="flex space-x-2 mt-2">
              <div className="w-6 h-6 bg-green-900 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-yellow-700 rounded-full cursor-pointer"></div>
              <div className="w-6 h-6 bg-blue-950 rounded-full cursor-pointer"></div>
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <h2 className="font-bold">Choose Size</h2>
            <div className="flex space-x-4 mt-2">
              <button className="border px-4 py-1 rounded">S</button>
              <button className="border px-4 py-1 rounded">M</button>
              <button className="border px-4 py-1 rounded">L</button>
              <button className="border px-4 py-1 rounded">XL</button>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4 mt-2">
            <div>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="border w-16 text-center"
              />
            </div>
            <button className="bg-black text-white px-6 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10 border-t pt-6">
        <div className="flex justify-center space-x-8">
          <button
            onClick={() => setTab("details")}
            className={`${tab === "details" ? "border-b-2 border-black" : ""} pb-2`}
          >
            Product Details
          </button>
          <button
            onClick={() => setTab("reviews")}
            className={`${tab === "reviews" ? "border-b-2 border-black" : ""} pb-2`}
          >
            Ratings & Reviews
          </button>
          <button
            onClick={() => setTab("faqs")}
            className={`${tab === "faqs" ? "border-b-2 border-black" : ""} pb-2`}
          >
            FAQs
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-center">
          {tab === "details" && (
            <p>
              This t-shirt is crafted with high-quality materials ensuring durability and comfort. Available in various sizes and colors.
            </p>
          )}
          {tab === "reviews" && (
            <div>
              {/* Reviews */}
              {reviews.map((review: Review) => (
                <div key={review.id} className="mb-4">
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i: number) => (
                      <span
                        key={i}
                        className={`${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-lg font-semibold mb-2">{review.comment}</p>
                  <div className="flex justify-center space-x-2">
                    <span className="font-medium">{review.customerName}</span>
                    {review.isVerified && <span className="text-green-500">✔ Verified</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab === "faqs" && (
            <div>
              <p>Q: What material is this t-shirt made of?</p>
              <p>A: 100% Cotton.</p>
              <p>Q: Is it machine washable?</p>
              <p>A: Yes, it is machine washable.</p>
            </div>
          )}
        </div>
      </div>

      {/* Learn More Button */}
      <div className="mt-8 text-center">
        <button className="bg-black text-white px-6 py-2 rounded">
          Learn More
        </button>
      </div>

      {/* You Might Also Like */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">You Might Also Like These</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <Image
              src="/polo.png"
              alt="Polo with Contrast Trims"
              width={295}
              height={298}
              className="object-cover rounded-lg"
            />
            <p className="mt-2 text-center">Men&apos;s V-Neck T-Shirt</p>
            <div className="flex justify-center mt-1 text-yellow-500">
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg text-gray-400">☆</span>
            </div>
            <p className="text-center text-gray-700">$19.99</p>
          </div>
          <div>
            <Image
              src="/gradient.png"
              alt="Gradient Graphic T-shirt"
              width={295}
              height={298}
              className="object-cover rounded-lg"
            />
            <p className="mt-2 text-center">Men&apos;s Polo T-Shirt</p>
            <div className="flex justify-center mt-1 text-yellow-500">
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg text-gray-400">☆</span>
            </div>
            <p className="text-center text-gray-700">$24.99</p>
          </div>
          <div>
            <Image
              src="/polo2.png"
              alt="Polo with Tipping Details"
              width={295}
              height={298}
              className="object-cover rounded-lg"
            />
            <p className="mt-2 text-center">Men&apos;s Slim Fit T-Shirt</p>
            <div className="flex justify-center mt-1 text-yellow-500">
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg text-gray-400">☆</span>
              <span className="text-lg text-gray-400">☆</span>
            </div>
            <p className="text-center text-gray-700">$22.99</p>
          </div>
          <div>
            <Image
              src="/blackstrips.png"
              alt="Black Striped T-shirt"
              width={295}
              height={298}
              className="object-cover rounded-lg"
            />
            <p className="mt-2 text-center">Men&apos;s Crew Neck T-Shirt</p>
            <div className="flex justify-center mt-1 text-yellow-500">
              <span className="text-lg mr-1">★</span>
              <span className="text-lg mr-1">★</span>
              <span className="text-lg text-gray-400">☆</span>
              <span className="text-lg text-gray-400">☆</span>
              <span className="text-lg text-gray-400">☆</span>
            </div>
            <p className="text-center text-gray-700">$18.99</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenClothingPage;
