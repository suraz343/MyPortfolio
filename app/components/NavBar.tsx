"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Send, FileText } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Suraz343
        </Link>

        
        <div className="hidden md:flex space-x-6">
          <Link href="#projects" className="hover:text-blue-400 font-semibold transition">
            Projects
          </Link>
          <a href="#skills" className="hover:text-blue-400 font-semibold transition">Skills</a>
          <a href="#message" className="flex items-center gap-1 bg-green-700 px-3 py-1 rounded-md font-semibold hover:bg-green-800 transition">
            <Send size={16} /> Message
          </a>
          <a href="/resume.pdf" className="flex items-center gap-1 bg-blue-900 px-3 py-1 rounded-md font-semibold hover:bg-blue-950 transition" target="_blank" rel="noopener noreferrer">
            <FileText size={16} /> Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <button className="absolute top-5 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>
          <X size={36} />
        </button>

        <Link href="#projects" className="text-white text-xl font-semibold hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <a href="#skills" className="text-white text-xl font-semibold hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#message" className="flex items-center gap-2 bg-green-700 px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-green-800 transition" onClick={() => setIsOpen(false)}>
          <Send size={20} /> Message
        </a>
        <a href="/resume.pdf" className="flex items-center gap-2 bg-blue-900 px-6 py-3 rounded-lg text-white text-lg font-semibold hover:bg-blue-950 transition" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
          <FileText size={20} /> Resume
        </a>
      </div>
    </nav>
  );
}
