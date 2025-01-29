"use client";
import React, { useState } from "react";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-400">Suraz343</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#projects" className="hover:text-blue-400 font-semibold transition">Projects</a>
          <a href="#about" className="hover:text-blue-400 font-semibold transition">About</a>
          <a href="#connect me" className="hover:text-blue-400 font-semibold transition">Connect Me</a>
          <a href="#send message" className="bg-green-800 hover:text-blue-400 px-2 py-1 rounded-md font-semibold transition">Message</a>
          <a href="/resume.pdf" className="bg-blue-900 hover:text-blue-400 px-2 py-1 rounded-md font-semibold transition" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-2xl">&#9776;</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <a href="/resume.pdf" className="block text-center py-2 hover:text-blue-400 transition">Resume</a>
          <a href="#projects" className="block text-center py-2 hover:text-blue-400 transition">Projects</a>
          <a href="#about" className="block text-center py-2 hover:text-blue-400 transition">About</a>
          <a href="#send message" className="block text-center py-2 hover:text-blue-400 transition">Send Message</a>
          <a href="#connect me" className="block text-center py-2 hover:text-blue-400 transition">Connect Me</a>
        </div>
      )}
    </nav>
  );
}
