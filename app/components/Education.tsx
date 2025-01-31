import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Education() {
    return (
        <div className="pt-16 m-3 w-full justify-center">
            <h1 className="ml-3 text-3xl text-blue-500 font-extrabold md:text-5xl md:text-center">Education</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3">
                {[
                    { level: "UnderGraduate(UG)", name: "Maharishi Markandeswar (Deemed to be University, Mullana, Ambala)", course: "B.Tech in Computer Science Engineering", percent: "86%", period: "2021 - 2025", icon:"mortarboard-fill" },
                    { level: "+2 Level", name: "Trinity International School", course: "Science (Maths & Computer)", percent: "92%", period: "04/2018 - 03/2020", icon:"mortarboard" },
                    { level: "School Level", name: "Kalika Secondary School", course: "Technical SEE", percent: "96%", period: "04/2015 - 04/2018", icon:"house-door-fill" }
                ].map((item, index) => (
                    <div key={index} className="text-white bg-gray-800 p-6 rounded-xl shadow-md flex flex-col gap-3 ml-10 m-6 mr-16">
                        
                        <h1 className="text-2xl font-bold text-blue-400">
                        <i className={`bi bi-${item.icon} text-blue-400 text-2xl p-2`}></i>{item.level}</h1>
                        <div className="m-2">
                        <h2 className="text-xl">{item.name}</h2>
                        <div className="ml-2">
                        <p className="text-blue-500 text-lg">{item.course}</p>
                        <p className="text-sm font-bold">Percentage: {item.percent}</p>
                        <p className="text-sm">{item.period}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
