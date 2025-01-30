import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/skills";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 dark:bg-gray-900">
      <NavBar />
      <HeroSection />
      <Projects />
      <Skills />
      
      
    </main>
  )
}