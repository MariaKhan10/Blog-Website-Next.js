"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { PiFediverseLogoFill } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 text-white bg-black bg-opacity-50">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-white">
          <PiFediverseLogoFill className="w-10 h-6 text-blue-500" />
          <span className="ml-3 text-xl font-bold">DigitalDevs</span>
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:ml-auto w-full md:w-auto text-base`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-5 mt-4 md:mt-0">
            <li className="text-center md:text-left">
              <Link href="/" className="block py-2 md:inline-block hover:text-blue-500">
                Home
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href="/Blog" className="block py-2 md:inline-block hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href="/Tutorials" className="block py-2 md:inline-block hover:text-blue-500">
                Tutorials
              </Link>
            </li>
            <li className="text-center md:text-left">
              <Link href="/Contact" className="block py-2 md:inline-block hover:text-blue-500">
                Contact Us
              </Link>
            </li>
            <li className="hidden md:inline-block">
              {/* Subscribe button is hidden on smaller screens */}
              <button className="bg-blue-500 border-0 px-3 py-2 focus:outline-none hover:bg-blue-600 rounded text-base text-white">
                Subscribe
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
