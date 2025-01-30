"use client";
import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-blue-400">Suraz343</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#projects" className="hover:text-blue-400 font-semibold transition">Projects</a>
          <a href="#about" className="hover:text-blue-400 font-semibold transition">About</a>
          <a href="#connect" className="hover:text-blue-400 font-semibold transition">Connect Me</a>
          <a href="#message" className="bg-green-800 hover:text-blue-400 px-3 py-1 rounded-md font-semibold transition">Message</a>
          <a href="/resume.pdf" className="bg-blue-900 hover:text-blue-400 px-3 py-1 rounded-md font-semibold transition" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-gray-800 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <a href="#projects" className="block text-center py-2 hover:text-blue-400 transition">Projects</a>
        <a href="#about" className="block text-center py-2 hover:text-blue-400 transition">About</a>
        <a href="#connect" className="block text-center py-2 hover:text-blue-400 transition">Connect Me</a>
        <a href="#message" className="block text-center py-2 bg-green-800 rounded-md font-semibold hover:text-blue-400 transition">Send Message</a>
        <a href="/resume.pdf" className="block text-center py-2 bg-blue-900 text-white rounded-md font-semibold hover:text-blue-400 transition" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </nav>
  );
}
