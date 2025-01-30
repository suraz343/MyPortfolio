import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <HeroSection />
      <Projects />
      
      
    </main>
  )
}