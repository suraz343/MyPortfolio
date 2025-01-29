"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const text = "Passionate about coding and problem-solving, with a strong willingness to grow and contribute to real-world projects.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 50); // Adjust typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen px-10 bg-gray-900 text-white">
     
      <div className="text-center md:text-left max-w-2xl">
        
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-400 animate-fadeIn">
          HEY DEVELOPERS 👋
        </h2>

        {/* "This is me" in stylish font */}
        <p className="text-2xl md:text-3xl text-gray-300 font-semibold mt-2">
          This is me
        </p>

        {/* Name - Stylish Large Font */}
        <h1 className="text-6xl md:text-7xl font-bold mt-4 leading-tight">
          Suraj <br /> Prajapati
        </h1>

        
        <div className="bg-gray-800 p-4 rounded-lg mt-6 max-w-lg mx-auto md:mx-0">
          <p className="text-xl md:text-2xl font-medium text-gray-300 transition-all duration-700">
            {displayText} <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      
      <div className="mt-12 md:mt-0 md:ml-16">
        <div className="relative w-60 h-60 md:w-80 md:h-80 border-4 border-blue-400 rounded-2xl shadow-lg overflow-hidden bg-gray-900">
          <img 
            src="/photo.png" 
            alt="Suraj Prajapati" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
