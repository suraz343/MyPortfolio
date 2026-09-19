import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";

interface ProjectProps {
  img: string;
  name: string;
  description: string;
  github: string;
}

const ProjectCard: React.FC<ProjectProps> = (props) => {
  return (
    <div className="bg-gray-800 text-white p-4 md:p-6 mr-4 rounded-2xl shadow-lg w-full max-w-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      {/* Image Section */}
      <div className="w-full flex items-center justify-center">
        <Image
          src={props.img}
          alt={props.name}
          className="rounded-lg object-contain w-full h-auto"
          width={500}
          height={300}
        />
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-2xl font-bold text-blue-400 mt-3">
        {props.name}
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-lg mt-2 flex-grow">
        {props.description}
      </p>

      {/* Button aligned at bottom */}
      <a
        href={props.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 mt-auto px-3 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-400 transition self-start"
      >
        <i className="bi bi-github text-base"></i>
        Find out more
      </a>
    </div>
  );
};

export default function Projects() {
  const projectList = [
    // --- Client work at Smarten Technologies (Odoo) ---
    // TODO: replace img paths below with real screenshots placed in /public,
    // and swap the "#" links for the live site URLs.
    {
      img: "/aquaworld.jpg",
      name: "Aqua World",
      description:
        "Full custom Odoo website for a water delivery company - homepage, product & subscription pages, blog, Google sign-in, and Leaflet-based location capture on the quote form.",
      github: "#",
    },
    {
      img: "/aviyan-travel.jpg",
      name: "Aviyan Travel Tour Portal",
      description:
        "Custom Odoo travel booking platform covering flights, hotels, tours, car rentals, and packages, with dynamic hero booking tabs and a controller-driven tour detail page.",
      github: "#",
    },
    {
      img: "/kundalini-durbar-banquet.jpg",
      name: "Kundalini Durbar Banquet",
      description:
        "Complete Odoo website for a banquet & events venue, with a backend-driven hall detail page, an events listing with filters, and a booking form wired into CRM.",
      github: "#",
    },
    {
      img: "/ujyaalo-nepal-party.jpg",
      name: "Ujyaalo Nepal Party",
      description:
        "Full Odoo 18 website with a dedicated backend module for managing news, members, and media, powering dynamic committee, department, and media-center snippets.",
      github: "#",
    },
    {
      img: "/ultima-lifestyle.jpg",
      name: "Ultima Lifestyle",
      description:
        "Odoo 19 e-commerce build with a dynamic mega menu, a backend-driven FAQ system, and reusable React/Next.js + Tailwind components for the storefront.",
      github: "#",
    },
    {
      img: "/reet-cosmetics.jpg",
      name: "Reet Cosmetics",
      description:
        "End-to-end Odoo e-commerce build including custom login with Google OAuth, cart, checkout, and order-complete flow, plus a fully populated product catalog.",
      github: "#",
    },
    // --- Personal projects ---
    {
      img: "/innovnepal.jpeg",
      name: "InnovNepal Website",
      description:
        "InnovNepal is a Nepali platform that provides IoT hardware, kits, and educational workshops for students. It focuses on making technology learning accessible and practical.",
      github: "https://www.innovnepal.com/",
    },
    {
      img: "/expensemanager.jpg",
      name: "Expense Manager",
      description:
        "An intuitive expense manager app to track, categorize, and analyze your daily expenses using React.",
      github: "https://github.com/suraz343/Expense-Manager",
    },
    {
      img: "/grance-beauty-zone.jpg",
      name: "Grance Beauty Zone",
      description:
        "It's a modern web platform designed for booking beauty services and exploring beauty products. It provides users with an easy way to schedule appointments, ensuring a seamless experience. Built with Next.js, TypeScript, and Tailwind CSS, the platform focuses on a clean and responsive UI. 🚀✨",
      github: "https://grance-beauty-zone.vercel.app/",
    },
    {
      img: "/mycourse1.jpg",
      name: "My Courses App",
      description:
        "A university management system app built with Kotlin to help students and faculty manage courses efficiently.",
      github: "https://github.com/suraz343/APP_My_Courses",
    },
  ];

  return (
    <div
      id="projects"
      className="pt-16 bg-gray-900 text-white flex flex-col mt-6 items-center px-6 md:px-16"
    >
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