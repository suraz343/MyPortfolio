import React from "react";

// ProjectCard Component (Accepts Props)
interface ProjectProps {
    name: string;
    description: string;
    github: string
  }
  const ProjectCard: React.FC<ProjectProps> = (props) => {
  return (
    <div className=" bg-gray-800 text-white p-10 m-3 rounded-2xl shadow-lg max-w-md w-full transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-blue-400 md:text-3xl">{props.name}</h2>
      <p className="text-gray-200 mt-3 md:text-lg">{props.description}</p>
      <a
        href={props.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default function Projects() {
  // List of projects
  const projectList = [
    {
      name: "My Portfolio Website",
      description:
        "A portfolio website to showcase your skills, projects, and experience in a structured and visually appealing way.",
      github: "https://github.com/suraz343/MyPortfolio",
    },
    {
      name: "Expense Manager",
      description:
        "An intuitive expense manager app to track, categorize, and analyze your daily expenses using React.",
      github: "https://github.com/suraz343/Expense-Manager",
    },
    {
      name: "DrumKit Website",
      description:
        "An interactive web application that allows users to play drum sounds through keyboard presses or mouse clicks.",
      github: "https://github.com/suraz343/Drum_kit_Website",
    },
    {
      name: "My Courses App",
      description:
        "A university management system app built with Kotlin to help students and faculty manage courses efficiently.",
      github: "https://github.com/suraz343/APP_My_Courses",
    },
  ];

  return (
    <div className="bg-gray-900 text-white flex flex-col mt-6 items-center px-6 md:px-16">
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-400 text-center md:text-left mb-10">
        My Projects
      </h1>

      {/* Grid Layout for Project Cards */}
      <div className="mr-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}
