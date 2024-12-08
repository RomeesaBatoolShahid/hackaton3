'use client'
import { useState } from 'react';
import Link from 'next/link';
import { AlignJustify , ShoppingCart ,  ChevronDown ,  Search ,CircleUserRound } from 'lucide-react';


const Navbar = () => {
  // State to handle mobile menu visibility
  const [mobileMenu, setMobileMenu] = useState(false);

  // State to handle dropdown visibility for "Shop"
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-2 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold ml-14 text-gray-800">
          <Link href="/">SHOP.CO</Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 items-center">
          {/* Dropdown for Shop */}
          <li className="relative group">
          <button
              className="flex items-center text-gray-800"
              onClick={() => setDropdown(!dropdown)} // Toggle dropdown visibility
            >
              <span>Shop</span>
              <ChevronDown className="ml-1 w-4 h-4 text-gray-800" /> {/* Dropdown icon */}
            </button>
            {dropdown && (
              <ul className="absolute left-0 bg-white shadow-lg rounded-md w-40 mt-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Category 1</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Category 2</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">Category 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li><Link href="#">On Sale</Link></li>
          <li><Link href="#">New Arrivals</Link></li>
          <li><Link href="#">Brands</Link></li>
        </ul>

        {/* Search Bar (only visible on medium and larger screens) */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 text-gray-600 px-4 py-2 rounded-3xl focus:outline-none w-72 pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" /> {/* Search icon */}
        </div>

        {/* Cart & User Icons (only visible on medium and larger screens) */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-800">
            <span role="img" aria-label="cart" className="text-xl"><i><ShoppingCart /></i></span>
          </button>
          <button className="text-gray-800"><CircleUserRound /></button>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)} // Toggle mobile menu visibility
          className="md:hidden text-gray-800 -ml-28"
        >
          <span role="img" aria-label="menu" className="text-2xl"><i><AlignJustify /></i></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 p-7">
            <li><Link href="#">Shop</Link></li>
            <li><Link href="#">On Sale</Link></li>
            <li><Link href="#">New Arrivals</Link></li>
            <li><Link href="#">Brands</Link></li>
            <li>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 text-gray-600 px-4 py-2  rounded-lg focus:outline-none w-full"
              />
            </li>
            <li><Link href="#">Sign In</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;