import React from 'react';
import { Trash2 } from 'lucide-react';
import Image from 'next/image'; // Import Image from next/image

const CartPage = () => {
  return (
    <div className="container mx-auto pt-20 p-4 overflow-hidden">
      {/* Breadcrumb Navigation */}
      <div className="flex text-sm text-gray-600 mb-4">
        <span>Home</span>
        <span className="mx-2">&gt;</span>
        <span>Cart</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side: Products */}
        <div className="flex-1 space-y-4">
          {/* Product 1 */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <Image 
                src="/smallpic (3).png" 
                alt="Product 1" 
                width={124}  // Specify width
                height={124} // Specify height
                className="object-cover mr-4" 
              />
              <div>
                <h3 className="font-semibold">Product 1</h3>
                <p className="text-gray-500">Size: M</p>
                <p className="text-gray-500">Color: Red</p>
              </div>
            </div>
            <div className="flex items-center sm:ml-auto">
              <button className="text-gray-500">-</button>
              <input type="text" value="1" className="w-10 text-center border rounded-md mx-2" />
              <button className="text-gray-500">+</button>
              <span className="text-gray-800 ml-4">$20.00</span>
            </div>
            <button className="text-red-500 mt-2 sm:mt-0 sm:ml-4"><Trash2 /></button>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <Image 
                src="/smallpic (2).png" 
                alt="Product 2" 
                width={124}  
                height={124} 
                className="object-cover mr-4" 
              />
              <div>
                <h3 className="font-semibold">Product 2</h3>
                <p className="text-gray-500">Size: L</p>
                <p className="text-gray-500">Color: Blue</p>
              </div>
            </div>
            <div className="flex items-center sm:ml-auto">
              <button className="text-gray-500">-</button>
              <input type="text" value="1" className="w-10 text-center border rounded-md mx-2" />
              <button className="text-gray-500">+</button>
              <span className="text-gray-800 ml-4">$25.00</span>
            </div>
            <button className="text-red-500 mt-2 sm:mt-0 sm:ml-4"><Trash2 /></button>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <Image 
                src="/smallpic (1).png" 
                alt="Product 3" 
                width={124}  
                height={124} 
                className="object-cover mr-4" 
              />
              <div>
                <h3 className="font-semibold">Product 3</h3>
                <p className="text-gray-500">Size: XL</p>
                <p className="text-gray-500">Color: Green</p>
              </div>
            </div>
            <div className="flex items-center sm:ml-auto">
              <button className="text-gray-500">-</button>
              <input type="text" value="1" className="w-10 text-center border rounded-md mx-2" />
              <button className="text-gray-500">+</button>
              <span className="text-gray-800 ml-4">$30.00</span>
            </div>
            <button className="text-red-500 mt-2 sm:mt-0 sm:ml-4"><Trash2 /></button>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-gray-800">$75.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Shipping</span>
            <span className="text-gray-800">$10.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Taxes</span>
            <span className="text-gray-800">$5.00</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total</span>
            <span className="font-semibold text-red-500">$90.00</span>
          </div>

          {/* Promo Code Section */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full p-2 border rounded-md text-gray-700"
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Apply Promo Code
          </button>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
