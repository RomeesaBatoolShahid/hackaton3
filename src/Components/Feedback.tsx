'use client'
import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; // Importing Heroicons

const reviews = [
  { id: 1, rating: 5, comment: "This product exceeded my expectations! I love the quality and design. Definitely worth the purchase.", customerName: "John Doe", isVerified: true },
  { id: 2, rating: 4, comment: "Great product! Would have liked faster shipping, but still very satisfied with my purchase.", customerName: "Jane Smith", isVerified: true },
  { id: 3, rating: 5, comment: "Absolutely amazing! The best purchase I've made in a while. Will definitely recommend to others.", customerName: "Michael Lee", isVerified: false },
  { id: 4, rating: 4, comment: "Good quality and customer service. Would purchase again, but the price could be a bit lower.", customerName: "Sarah Brown", isVerified: true },
  { id: 5, rating: 5, comment: "This is hands down the best product I've ever purchased. Super comfortable and looks great!", customerName: "David Wang", isVerified: true },
  { id: 6, rating: 3, comment: "The product is fine, but the quality could be improved. Not bad, but I was expecting more.", customerName: "Emily Clark", isVerified: false },
  { id: 7, rating: 5, comment: "I'm in love with this! The quality is top-notch, and it fits perfectly. Highly recommend it.", customerName: "James Martin", isVerified: true },
  { id: 8, rating: 4, comment: "Good experience overall. It arrived on time and was as described. I will definitely buy from here again.", customerName: "Laura Wilson", isVerified: true },
  { id: 9, rating: 5, comment: "Amazing product! I’ve never been so satisfied with an online purchase. Will buy again soon.", customerName: "Chris Johnson", isVerified: true },
  { id: 10, rating: 4, comment: "I’m happy with the product, though there were a few issues with sizing. Otherwise, great experience.", customerName: "Natalie Kim", isVerified: true },
];

const OurHappyCustomers = () => {
  const reviewContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="px-6 lg:px-20 py-12 bg-gray-100 overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Our Happy Customers</h2>
        <div className="flex space-x-4">
          <button onClick={scrollLeft} className="text-gray-700 hover:text-gray-900">
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          <button onClick={scrollRight} className="text-gray-700 hover:text-gray-900">
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Reviews Container */}
      <div ref={reviewContainerRef} className="flex space-x-6 overflow-hidden">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-8 rounded-lg shadow-lg w-[300px] flex-shrink-0">
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="text-lg font-semibold mb-4">{review.comment}</p>

            <div className="flex justify-center items-center space-x-2">
              <span className="font-medium">{review.customerName}</span>
              {review.isVerified && <span className="text-green-500">✔ Verified</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurHappyCustomers;
