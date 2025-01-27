'use client';
import { useState } from 'react';
import { GrMenu } from "react-icons/gr";
import { FiX } from "react-icons/fi"; // Menü açma kapama iconları

import ThemeToggle from '../sub/ThemeToggle';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-auto shadow-lg top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-3xl z-50 transition-all duration-300 ease-in-out py-4">
      <nav className="max-w-[100rem] w-full mx-auto px-5 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between w-full">
          <a
            href="/"
            className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 hover:bg-gradient-to-l transition-transform duration-300 ease-in-out hover:scale-110 shadow-md hover:shadow-purple-500/50"
          >
            Nevzat Atalay
          </a>
          {/* Mobil menü butonu */}
          <button onClick={toggleMenu} className="sm:hidden text-3xl text-gray-200 dark:text-white transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none">
            {isOpen ? <FiX /> : <GrMenu />} {/* Açık/Kapalı duruma göre ikon değişir */}
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full sm:flex sm:items-center sm:justify-end transition-all duration-500 ease-in-out text-[#000]`}>
          <div className="flex flex-col gap-6 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 mx-auto">
<a className="text-xl font-bold dark:text-gray-300 hover:text-white dark:hover:text-blue-500 focus:outline-none focus:text-indigo-400 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-indigo-600 pb-1 transform hover:scale-105 hover:opacity-90" href="/">Home</a>
<a className="text-xl font-bold dark:text-gray-300 hover:text-white dark:hover:text-blue-500 focus:outline-none focus:text-indigo-400 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-indigo-600 pb-1 transform hover:scale-105 hover:opacity-90" href="/works">Works</a>
<a className="text-xl font-bold dark:text-gray-300 hover:text-white dark:hover:text-blue-500 focus:outline-none focus:text-indigo-400 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-indigo-600 pb-1 transform hover:scale-105 hover:opacity-90" href="/about">About</a>
<a className="text-xl font-bold dark:text-gray-300 hover:text-white dark:hover:text-blue-500 focus:outline-none focus:text-indigo-400 transition-all duration-300 ease-in-out border-b-2 border-transparent hover:border-indigo-600 pb-1 transform hover:scale-105 hover:opacity-90" href="/contact">Contact</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Nav;