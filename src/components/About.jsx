const technologies = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "framework" },
    { name: "PHP", category: "backend" },
    { name: "MySQL", category: "database" },
    { name: "Git", category: "tool" },
    { name: "Vite", category: "tool" },
    { name: "Laravel", category: "framework" },
  ]
  
  export default function About({ darkMode }) {
    return (
      <section className="py-16" id="sobre-mi">
        <h2 className={`text-4xl font-bold mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>Sobre mí</h2>
  
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className={`w-full md:w-3/5 ${darkMode ? "text-gray-300" : "text-gray-700"} space-y-4`}>
            <p>
              Soy Benjamín Galán Díaz, y estoy cursando mi último año de Ingeniería en Sistemas de la Información en la
              Universidad Nacional Politécnica de Nicaragua, enfocado en el desarrollo web.
            </p>
            <p>
              Constantemente creo proyectos para potenciar mis habilidades y aplico el aprendizaje continuo para
              fortalecer mi conocimiento, con el objetivo de aportar en los proyectos que llegue a desempeñar.
            </p>
  
            <div className="pt-6">
              <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Tecnologías y herramientas que utilizo
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`inline-block text-sm px-3 py-1 rounded-full ${
                      tech.category === "frontend"
                        ? darkMode
                          ? "bg-blue-900/30 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                        : tech.category === "backend"
                          ? darkMode
                            ? "bg-green-900/30 text-green-300"
                            : "bg-green-100 text-green-700"
                          : tech.category === "database"
                            ? darkMode
                              ? "bg-yellow-900/30 text-yellow-300"
                              : "bg-yellow-100 text-yellow-700"
                            : tech.category === "framework"
                              ? darkMode
                                ? "bg-purple-900/30 text-purple-300"
                                : "bg-purple-100 text-purple-700"
                              : darkMode
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
  
          <div className="w-full md:w-2/5">
            <img
              src="/man-work-2.webp?height=400&width=400"
              alt="Developer illustration"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    )
  }
  
  