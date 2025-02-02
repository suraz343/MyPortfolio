"use client";
import React from "react";
import Image from "next/image"; 
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <div className="flex flex-col sm:text-center md:flex-row items-center justify-center min-h-screen pl-11 md:px-10 bg-gray-900 text-white pr-6">
      
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left max-w-2xl w-full">
        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-400 mt-24 md:mt-32">
          HEY DEVELOPERS 👋
        </h2>
        <p className="text-xl md:text-3xl text-gray-200 font-semibold mt-2">
          This is me
        </p>
        <h1 className="text-4xl md:text-7xl font-bold mt-4 leading-tight">
          Suraj <br /> Prajapati
        </h1>
        <div className="p-4 mt-6 max-w-lg w-full mx-auto md:mx-0">
          <p className="text-xs md:text-xl text-gray-300 font-semibold">
          I am passionate about coding, eager to learn and improve my skills, committed to building innovative solutions, and excited to contribute to impactful projects.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="mt-12 md:mt-0 md:ml-16 flex flex-col justify-center items-center w-full">
        <div className="relative w-48 h-48 md:w-80 md:h-80 border-4 border-blue-500 rounded-3xl shadow-lg overflow-hidden bg-yellow-200">
          <Image 
            src="/photo.png" 
            alt="Suraj Prajapati" 
            className="w-full h-full object-cover"
            width={320} 
            height={320}
          />
        </div>
        <h3 className="text-blue-500 mt-4 text-center font-semibold md:text-2xl md:font-bold">
      <Typewriter
        words={['Web Developer', 'App Developer']}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h3>
    <div className="m-6 flex flex-row item-center p-6 text-2xl md:text-4xl">
    <a href="https://www.linkedin.com/in/suraj-prajapati-057216232/" target="_blank" rel="noopener noreferrer">
    <i className="m-6 bi bi-linkedin  text-blue-400 hover:text-blue-700 transition"></i></a>
    <a href="https://github.com/suraz343" target="_blank" rel="noopener noreferrer">
    <i className="m-6 bi bi-github  text-blue-400 hover:text-blue-700 transition"></i></a>
    <a href="https://www.instagram.com/suraz343/" target="_blank" rel="noopener noreferrer">
    <i className="m-6 bi bi-instagram  text-blue-400 hover:text-blue-700 transition"></i></a>
    <a href="https://www.facebook.com/suraj.prajapati.3597789" target="_blank" rel="noopener noreferrer">
    <i className="m-6 bi bi-facebook  text-blue-400 hover:text-blue-700 transition"></i></a>
    </div>
      </div>
    </div>
  );
}
