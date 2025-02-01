import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from "next/image";


interface ProjectProps {
  img: string; 
  name: string;
  description: string;
  github: string;
}

const ProjectCard: React.FC<ProjectProps> = (props) => {
  return (
    <div className="bg-gray-800 text-white p-4 md:p-6 mr-4 rounded-2xl shadow-lg w-full max-w-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="w-full flex items-center justify-center">
        <Image 
          src={props.img} 
          alt={props.name} 
          className="rounded-lg object-contain w-full h-auto"  // Show full image without crop
          width={500} 
          height={300} 
        />
      </div>

      <h2 className="text-lg md:text-2xl font-bold text-blue-400 mt-3">{props.name}</h2>
      <p className="text-gray-300 text-sm md:text-lg mt-2">{props.description}</p>
      <a
        href={props.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
      >
        <i className="bi bi-github text-lg p-1"></i>
        View on GitHub
      </a>
    </div>
  );
};



export default function Projects() {
  
  const projectList = [
    {
      img: "/myportfolio.jpg", // Use images from the public folder
      name: "My Portfolio Website",
      description: "A portfolio website to showcase your skills, projects, and experience in a structured and visually appealing way.",
      github: "https://github.com/suraz343/MyPortfolio",
    },
    {
      img: "/expensemanager.jpg",
      name: "Expense Manager",
      description: "An intuitive expense manager app to track, categorize, and analyze your daily expenses using React.",
      github: "https://github.com/suraz343/Expense-Manager",
    },
    {
      img: "/drumkit.jpg",
      name: "DrumKit Website",
      description: "An interactive web application that allows users to play drum sounds through keyboard presses or mouse clicks.",
      github: "https://github.com/suraz343/Drum_kit_Website",
    },
    {
      img: "/mycourse1.jpg",
      name: "My Courses App",
      description: "A university management system app built with Kotlin to help students and faculty manage courses efficiently.",
      github: "https://github.com/suraz343/APP_My_Courses",
    },
  ];

  return (
    <div id="projects" className="pt-16 bg-gray-900 text-white flex flex-col mt-6 items-center px-6 md:px-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400 text-center mb-6">
        My Projects
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            name={project.name}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
