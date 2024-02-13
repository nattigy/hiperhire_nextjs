"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuIcon, SearchIcon, BellIcon } from "@heroicons/react/outline"; // import icons needed

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - visible on all screens */}
          <div className="flex items-center">
            <Image
              src="/logo/logo-mobile-new.svg"
              alt="testvalley"
              width={100}
              height={100}
            />

            {/* Hamburger Icon - visible on screens larger than 850px */}
            <div className="ml-6 hidden lg:block">
              <button
                onClick={handleMenuClick}
                className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="ml-1">Categories</span>
              </button>
            </div>
          </div>

          {/* You can add the dropdown content here, hidden by default and shown when 'isMenuOpen' is true */}
          {isMenuOpen && (
            <div className="absolute z-10 w-full lg:w-auto lg:bg-transparent bg-white shadow-md p-4 mt-16">
              drop down
            </div>
          )}

          {/* Search Bar - hidden on screens smaller than 850px */}
          <div className="hidden lg:flex lg:flex-grow lg:items-center lg:justify-center">
            <div className="relative w-full px-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-200 text-gray-700 rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
              <span className="absolute inset-y-0 left-4 flex items-center pr-2">
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </span>
            </div>
          </div>

          {/* Links and Icons - visible on screens larger than 850px */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Login
            </a>
            <div>/</div>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Sign up
            </a>
            {/* New icon element here */}
          </div>

          {/* Icons - visible on screens smaller than 850px */}
          <div className="flex items-center lg:hidden">
            <p className="mx-2">
              <BellIcon className="h-5 w-5 text-gray-500" />
            </p>
            <p className="mx-1">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
