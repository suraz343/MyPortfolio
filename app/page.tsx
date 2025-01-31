import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Education from "./components/Education";


export default function Home() {
  return (
    <main className="max-w-full overflow-x-hidden bg-gray-900 dark:bg-gray-900">
      <NavBar />
      <HeroSection />
      <Projects />
      <Skills />
      <Education />
    </main>
  )
}