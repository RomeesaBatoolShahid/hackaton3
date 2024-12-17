'use client';
import React, { useState } from "react";
import Image from "next/image";  // Import the Image component from next/image
type Section = "filter" | "price" | "colors" | "sizes" | "style";

const CategoryPage = () => {
  const products = [
    { id: 1, image: "/blackstrips.png", name: "Black Striped T-shirt", price: "$19.99", rating: 4 },
    { id: 2, image: "/polo.png", name: "Polo with Tipping Details", price: "$24.99", rating: 5 },
    { id: 3, image: "/jeans.png", name: "SKINNY FIT JEANS", price: "$29.99", rating: 3 },
    { id: 4, image: "/gradient.png", name: "Gradient Graphic T-shirt", price: "$34.99", rating: 4 },
    { id: 5, image: "/checked shirt.png", name: "CHECKERED SHIRT", price: "$39.99", rating: 2 },
    { id: 6, image: "/t-shirt.png", name: "SLEEVE STRIPED T-SHIRT", price: "$44.99", rating: 5 },
    { id: 7, image: "/shirt.png", name: "VERTICAL STRIPED SHIRT", price: "$49.99", rating: 4 },
    { id: 8, image: "/polo2.png", name: "Polo with Contrast Trims", price: "$54.99", rating: 3 },
    { id: 9, image: "/shorts.png", name: "LOOSE FIT BERMUDA SHORTS", price: "$59.99", rating: 5 },
  ];

  const [openSections, setOpenSections] = useState({
    filter: true,
    price: true,
    colors: true,
    sizes: true,
    style: true,
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSection = (section: Section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="flex flex-col overflow-hidden lg:flex-row pt-20">
      {/* Filter Toggle Button for Small Screens */}
      <div className="lg:hidden px-4 overflow-hidden mb-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          {isSidebarOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative overflow-hidden ${isSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-[295px] lg:h-[1220px] bg-white p-4 pl-6 overflow-hidden lg:overflow-y-auto transition-all duration-300`}
      >
        {/* Filters Heading */}
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Filter Section */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("filter")}
          >
            <h3 className="font-medium">Filter By</h3>
            <span>{openSections.filter ? "▲" : "▼"}</span>
          </div>
          {openSections.filter && (
            <ul className="space-y-2 mt-2">
              {["Shirts", "Shorts", "T-Shirts", "Jeans", "Hoodie"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-blue-600 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <hr />

        {/* Price Section */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("price")}
          >
            <h3 className="font-medium">Price</h3>
            <span>{openSections.price ? "▲" : "▼"}</span>
          </div>
          {openSections.price && (
            <div className="mt-2">
              <input
                type="range"
                min="0"
                max="500"
                step="1"
                className="w-full cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>
          )}
        </div>
        <hr />

        {/* Colors Section */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("colors")}
          >
            <h3 className="font-medium">Colors</h3>
            <span>{openSections.colors ? "▲" : "▼"}</span>
          </div>
          {openSections.colors && (
            <div className="grid grid-cols-5 gap-2 mt-2">
              {[
                "bg-red-500",
                "bg-blue-500",
                "bg-green-500",
                "bg-yellow-500",
                "bg-orange-500",
                "bg-purple-500",
                "bg-pink-500",
                "bg-gray-500",
                "bg-black",
                "bg-white border",
              ].map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full cursor-pointer ${color} ${
                    color === "bg-white border" ? "border border-gray-400" : ""
                  }`}
                ></div>
              ))}
            </div>
          )}
        </div>
        <hr />

        {/* Size Section */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("sizes")}
          >
            <h3 className="font-medium">Sizes</h3>
            <span>{openSections.sizes ? "▲" : "▼"}</span>
          </div>
          {openSections.sizes && (
            <div className="flex flex-wrap gap-2 mt-2">
              {["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map((size) => (
                <div
                  key={size}
                  className="px-2 py-1 bg-gray-200 text-sm rounded-md hover:bg-gray-300 cursor-pointer text-center"
                >
                  {size}
                </div>
              ))}
            </div>
          )}
        </div>
        <hr />

        {/* Style Section */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("style")}
          >
            <h3 className="font-medium">Choose Style</h3>
            <span>{openSections.style ? "▲" : "▼"}</span>
          </div>
          {openSections.style && (
            <ul className="space-y-2 mt-2">
              {["Formal", "Casual", "Party", "Gym"].map((style) => (
                <li
                  key={style}
                  className="cursor-pointer hover:text-blue-600 text-gray-700"
                >
                  {style}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Apply Filter Button */}
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 mt-4">
          Apply Filter
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-6">Casual</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              {/* Replacing <img> with <Image /> */}
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={295}
                className="w-full h-[295px] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex flex-wrap justify-center items-center mt-8 gap-2">
          <button
            className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-sm md:text-base"
          >
            ← Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="px-3 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-md text-sm md:text-base"
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-sm md:text-base"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
