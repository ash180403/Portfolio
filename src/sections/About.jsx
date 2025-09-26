import RevealOnScroll from "../Ui/RevealOnScroll";
  function About() {
    const skills = [
      "Html",
      "Css", 
      "Java",
      "Spring",
      "Javascript",
      "TypeScript ",
      "React/Native",
      "TailwindCSS",
      "Node Js",
      "AWS",
      "SQL",
      "MongoDB",
      
    ];
    return (
      <section
        id="about"
        className="min-h-screen font-sans flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
              About Me
            </h2>
            <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 transition-all bg-white/5">
              <p className="text-gray-300 mb-5 text-xl">
                Passionate developer with expertise in building scalable web
                applications and creating innovative solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-white/5 border border-white/10">
                <h3 className="text-2xl text-center font-bold mb-8">💼 Skills</h3>
                <div className="flex justify-center flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-md transition "
                      key={index}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-white/5 border border-white/10">
                <h3 className="text-2xl text-center font-bold mb-8">
                  📚 Education
                </h3>
                <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
                  <li>
                    <strong>
                      {" "}
                      <em>B.E in Information Science </em>{" "}
                    </strong>
                    <br />
                    PDA College of Engineering (2021- 2025)
                  </li>
                  <li>
                    Data Structure, Web Development, Mobile Development..
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-6 mt-6 rounded-xl hover:-translate-y-1 transition-all bg-white/5 border border-white/10">
            <h3 className="text-2xl text-center font-bold mb-8">
    💻 Work Experience
  </h3>
  <ul className="pl-5 list-disc list-inside text-lg text-gray-300">
    <li>
      <strong className="text-blue-400">
        <em>Intern</em>
      </strong>
      📍
      <br />* Cascade Technologies Solutions | Remote | 2024 - 2025 (6 months) <br />
      - Built and maintained a full-stack application using Spring Boot and React.js <br />
      - Developed scalable RESTful APIs and implemented secure user authentication <br />
      - Integrated MySQL and MongoDB for structured and scalable data storage,
        ensuring reliable backend performance
    </li>
  </ul>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    );
  }

  export default About;