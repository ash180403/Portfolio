import { useState } from "react";
import sparkidsImage from "../assets/sparkids.png";
import radiationImage from "../assets/rad.png";
import { FaGithub, FaLink } from "react-icons/fa";
import RevealOnScroll from "../Ui/RevealOnScroll";

function Projects() {
  const [projects] = useState([
    {
      image: sparkidsImage,
      name: "Sparkids: E-Learning Platform",
      brief:
        "Engineered a scalable, full-stack E-Learning platform with a microservices architecture using Spring Boot and React.js. It features comprehensive RESTful APIs for course content and a secure user authentication system.",
      technologies: ["Java", "Spring Boot", "React.js", "MySQL", "MongoDB"],
      liveLink: "https://ash180403.github.io/sparkids/", 
      githubLink: "https://github.com/ash180403/sparkids", 
    },
    {
      image: radiationImage,
      name: "Radiation Dose Calculation",
      brief:
        "Designed a data processing pipeline in Python for radiation dose estimation. Utilized the Geant4 toolkit for Monte Carlo simulations to predict dose distribution and improve computational efficiency by 30%.",
      technologies: ["Python", "Geant4", "Monte Carlo"],
      githubLink: "https://github.com/ash180403/radiation-dose-ml", 
    },
  ]);

  return (
    <section
      id="projects"
      className="min-h-screen font-sans flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-cyan-500/30"
              >
                <div className="p-6">
                  <div className="relative h-48 overflow-hidden rounded-xl mb-6 shadow-lg">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2 bg-gradient-to-r from-teal-400 to-indigo-600 bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.brief}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-teal-400 text-xs font-semibold px-3 py-1 rounded-full transition-colors duration-300 hover:bg-teal-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition-colors"
                      >
                        <FaLink className="text-lg" />
                        <span className="relative pb-1 after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">Live Site</span>
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors"
                    >
                      <FaGithub className="text-lg" />
                      <span className="relative pb-1 after:bg-purple-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Projects;
