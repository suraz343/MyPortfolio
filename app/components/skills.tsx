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
                <p className="text-blue-400 text-lg">Web Developer</p>
              </div>
            </div>
            <ul className="list-disc pl-5 text-gray-300 text-md space-y-2">
              <li>Built and managed websites using WordPress, ensuring smooth functionality and user experience.</li>
              <li>Customized themes and plugins to meet business requirements.</li>
              <li>Assisted in website maintenance, updates, and performance optimization.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="font-extrabold text-blue-400 text-3xl md:text-5xl text-center md:text-left">
            Technical Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              { title: "Programming", skills: "C, Java, Python, JavaScript", icon: "code-slash" },
              { title: "Frontend", skills: "HTML, CSS, JavaScript, React", icon: "layout-text-window" },
              { title: "Backend", skills: "Node.js, Express.js", icon: "server" },
              { title: "Database", skills: "MySQL", icon: "database" },
              { title: "Version Control", skills: "Git & GitHub", icon: "github" },
              { title: "Framework", skills: "Bootstrap, Django, Next JS, Tailwind CSS", icon: "front" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center gap-4 mx-auto w-full">
                <i className={`bi bi-${item.icon} text-blue-400 text-3xl`}></i>
                <div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
