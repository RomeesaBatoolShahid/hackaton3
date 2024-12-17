'use client';
import { useState } from 'react';
import { Facebook, Github, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


export default function Footer() {
    // State to store email
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();  // Prevent page reload on form submit

    if (email) {
      // Process the email (send to a server, etc.)
      console.log('Submitted email:', email);
      setEmail('');  // Clear the input after submission
    } else {
      alert('Please enter a valid email address.');
    }
  };

    return (
        <div className=''>
           {/* Blackbox Section */}
<div className="bg-black top-24 overflow-hidden text-white px-[64px] py-[36px] w-[1170px] h-[180px] rounded-3xl left-11 relative hidden lg:block">
  <div>
    <h1 className="font-extrabold text-4xl">
      STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
    </h1>
  </div>

  {/* Email Input Form */}
  <div className="flex flex-col items-center space-x-4 relative bottom-20 -right-72 space-y-5">
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
      {/* Input Field */}
      <input
        type="email"
        placeholder="Enter your email address"
        className="bg-white text-black py-2 px-6 rounded-md mb-4 w-[80%] md:w-auto"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Update email state on input change
        required
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-white text-black py-2 px-8 rounded-md cursor-pointer"
      >
        Subscribe to Newsletter
      </button>
    </form>
  </div>
</div>

            {/* mobile view */}
            <div className="bg-black text-white px-8 py-8 rounded-3xl w-full mx-auto block lg:hidden">
  {/* Headline */}
  <h1 className="font-extrabold text-2xl text-center mb-6">
    STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
  </h1>

  {/* Form */}
  <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full">
    {/* Email Input */}
    <input
      type="email"
      placeholder="Enter your email address"
      className="bg-white text-black py-3 px-4 rounded-md w-full"
      value={email}
      onChange={(e) => setEmail(e.target.value)} // Update email state on input change
      required
    />

    {/* Subscribe Button */}
    <button
      type="submit"
      className="bg-white text-black py-3 px-6 rounded-md font-semibold cursor-pointer w-full"
    >
      Subscribe to Newsletter
    </button>
  </form>
</div>

            {/* greybox */}
           {/* Container Section */}
<div className='bg-[#F0EEED] flex flex-row space-x-20 space-y-7 h-[650px] hidden sm:flex'>
  <div className='flex flex-col space-y-6 mt-48 px-16'>
    <h1 className='text-3xl font-extrabold'>SHOP.CO</h1>
    <p>We have clothes that suit your style and which you are proud to wear. From women to men</p>
    <div className="flex space-x-6">
      {/* Twitter Link */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 text-2xl"
      >
        <Twitter />
      </a>

      {/* Facebook Link */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <Facebook />
      </a>

      {/* Instagram Link */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-800 text-2xl"
      >
        <Instagram />
      </a>

      {/* GitHub Link */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-gray-900 text-2xl"
      >
        <Github />
      </a>
    </div>
  </div>

  {/* COMPANY Section */}
  <div className='flex flex-col relative top-[165px] space-y-6 -left-20'>
    <h2 className='text-2xl font-extrabold'>COMPANY</h2>
    <a href="#about" className="hover:text-gray-400">About</a>
    <a href="#features" className="hover:text-gray-400">Features</a>
    <a href="#works" className="hover:text-gray-400">Works</a>
    <a href="#career" className="hover:text-gray-400">Career</a>
  </div>

  {/* HELP Section */}
  <div className='flex flex-col relative top-[165px] space-y-6 -left-24'>
    <h2 className='text-2xl font-extrabold'>HELP</h2>
    <a href="#about" className="hover:text-gray-400">Customer Support</a>
    <a href="#features" className="hover:text-gray-400">Delivery Details</a>
    <a href="#works" className="hover:text-gray-400">Terms And Conditions</a>
    <a href="#career" className="hover:text-gray-400">Privacy Policy</a>
  </div>

  {/* FAQ Section */}
  <div className='flex flex-col relative top-[165px] space-y-6 -left-28'>
    <h2 className='text-2xl font-extrabold'>FAQ</h2>
    <a href="#about" className="hover:text-gray-400">Account</a>
    <a href="#features" className="hover:text-gray-400">Manage Deliveries</a>
    <a href="#works" className="hover:text-gray-400">Orders</a>
    <a href="#career" className="hover:text-gray-400">Payments</a>
  </div>

  {/* RESOURCES Section */}
  <div className='flex flex-col relative top-[165px] space-y-6 -left-32'>
    <h2 className='text-2xl font-extrabold'>RESOURCES</h2>
    <a href="#about" className="hover:text-gray-400">Free eBooks</a>
    <a href="#features" className="hover:text-gray-400">Development Tutorials</a>
    <a href="#works" className="hover:text-gray-400">How To-Blog</a>
    <a href="#career" className="hover:text-gray-400">Youtube Playlist</a>
  </div>
</div>

{/* Border Section */}
<div className='border-2 border-y-2 relative -top-20 border-gray-300 hidden sm:block'></div>

{/* Footer */}
<div className='flex flex-row relative -top-16 ml-16 hidden sm:flex'>
  <h2>Romeesa Batool © 2000-2023, All Rights Reserved</h2>
  <Image src="/cards.png" alt="cards" width="281" height="30" className='relative -right-96 ml-16' />
</div>
{/* mobile view */}
{/* Small Screen Section */}
<div className="bg-[#F0EEED] flex flex-col space-y-10 p-6 sm:hidden">
  {/* SHOP.CO Header */}
  <div className="flex flex-col space-y-4 text-center">
    <h1 className="text-2xl font-extrabold">SHOP.CO</h1>
    <p className="text-gray-600">
      We have clothes that suit your style and which you are proud to wear. From women to men.
    </p>
    <div className="flex justify-center space-x-6">
      {/* Social Media Links */}
      <a href="https://twitter.com" className="text-blue-500 text-2xl">
        <Twitter />
      </a>
      <a href="https://facebook.com" className="text-blue-600 text-2xl">
        <Facebook />
      </a>
      <a href="https://instagram.com" className="text-pink-600 text-2xl">
        <Instagram />
      </a>
      <a href="https://github.com" className="text-gray-800 text-2xl">
        <Github />
      </a>
    </div>
  </div>

  {/* Links Sections */}
  <div className="flex flex-wrap justify-between space-y-6">
    {/* COMPANY Section */}
    <div className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold">COMPANY</h2>
      <a href="#about" className="hover:text-gray-400">About</a>
      <a href="#features" className="hover:text-gray-400">Features</a>
      <a href="#works" className="hover:text-gray-400">Works</a>
      <a href="#career" className="hover:text-gray-400">Career</a>
    </div>

    {/* HELP Section */}
    <div className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold">HELP</h2>
      <a href="#support" className="hover:text-gray-400">Customer Support</a>
      <a href="#delivery" className="hover:text-gray-400">Delivery Details</a>
      <a href="#terms" className="hover:text-gray-400">Terms & Conditions</a>
      <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
    </div>

    {/* FAQ Section */}
    <div className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold">FAQ</h2>
      <a href="#account" className="hover:text-gray-400">Account</a>
      <a href="#deliveries" className="hover:text-gray-400">Manage Deliveries</a>
      <a href="#orders" className="hover:text-gray-400">Orders</a>
      <a href="#payments" className="hover:text-gray-400">Payments</a>
    </div>

    {/* RESOURCES Section */}
    <div className="flex flex-col space-y-3">
      <h2 className="text-xl font-bold">RESOURCES</h2>
      <a href="#ebooks" className="hover:text-gray-400">Free eBooks</a>
      <a href="#tutorials" className="hover:text-gray-400">Development Tutorials</a>
      <a href="#blogs" className="hover:text-gray-400">How To-Blog</a>
      <a href="#youtube" className="hover:text-gray-400">YouTube Playlist</a>
    </div>
  </div>

  {/* Footer */}
  <div className="text-center text-sm mt-6">
    <p>Romeesa Batool © 2000-2023, All Rights Reserved</p>
    <div className="flex justify-center mt-4">
      <Image src="/cards.png" alt="Payment Cards" width={200} height={30} />
    </div>
  </div>
</div>

        </div>
    )
}
