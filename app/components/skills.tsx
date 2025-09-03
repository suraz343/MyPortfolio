import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Skills() {
  return (
    <div id="skills" className="pt-32 m-8 md:m-36 flex flex-col md:flex-row justify-center items-center gap-12">
      
      {/* Work Experience Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="font-extrabold text-blue-400 text-3xl md:text-5xl text-center md:text-left">
            Work Experience
          </h1>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <i className="bi bi-briefcase-fill text-blue-400 text-4xl"></i>
              <div>
                <h3 className="text-white font-semibold text-2xl">InnovNepal (StartUp)</h3>
                <p className="text-blue-400 text-lg">Web Developer & Core Team Member</p>
              </div>
            </div>
   <ul className="list-disc pl-5 text-gray-300 text-md space-y-2">
  <li>Developed and maintained the InnovNepal website, ensuring responsive design and smooth user experience.</li>
  <li>Led and supported IoT-based educational projects, including smart agriculture and environmental monitoring solutions.</li>
  <li>Conducted hands-on IoT workshops in schools and colleges to train students on sensors and microcontrollers.</li>
  <li>Collaborated on designing and deploying IoT hardware kits to make technology learning more accessible.</li>
  <li>Provided technical support and guidance to students and institutions using InnovNepal’s products.</li>
</ul>


          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="ml-6 font-extrabold text-blue-400 text-3xl md:text-5xl text-center md:text-left">
            Tech Stacks
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  {[
    { title: "Programming", skills: "C, Java, Python, JavaScript, TypeScript", icon: "code-slash" },
    { title: "Frontend", skills: "HTML, CSS, JavaScript, React, Next Js", icon: "layout-text-window" },
    { title: "Backend", skills: "Node.js, Express.js, Django", icon: "server" },
    { title: "Database", skills: "MySQL, Postgres, MongoDB", icon: "database" },
    { title: "Version Control", skills: "Git & GitHub", icon: "github" },
    { title: "Framework", skills: "Bootstrap, Django, Next JS, Tailwind CSS", icon: "front" }
  ].map((item, index) => (
    <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center gap-4 mx-auto w-full">
      <div>
        <h3 className="text-white font-semibold text-lg">
        <i className={`bi bi-${item.icon} m-2 text-blue-400 text-3xl`}></i> 
          {item.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {item.skills.split(", ").map((skill, i) => (
            <span key={i} className="bg-gray-700 text-gray-200 px-2 py-1 rounded-lg text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
}
