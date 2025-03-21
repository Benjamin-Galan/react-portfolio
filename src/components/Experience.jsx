import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Code, ExternalLink } from "lucide-react"

export default function Experience({ darkMode }) {

  const projects = [
    {
      id: 1,
      title: "PayStore",
      image: "/matrixcell.jpeg?height=300&width=500",
      description: " Colaboré en el desarrollo de una aplicación web llamada \"Matrixcell\", una plataforma de gestión de creditos de celulares para clientes y manejo de inventario para vendedores, utilizando React, JavaScript, Tailwind css, Git (Contribuyendo con un desarrollador backend) y aplicando conocimientos en diseño UI. Aprendí a trabajar en equipo, a comunicarme de manera efectiva y a resolver problemas de manera eficiente.",
      technologies: ["React", "JavaScript Vanilla", "Tailwind CSS"],
      codeLink: "https://github.com/pubnicaragua/app-multi-tiendas",
      demoLink: "https://matrix-cell.com/invoices",
    }
  ]

  return (
    <section className="py-16" id="experiencia">
      <h2 className={`text-4xl font-bold mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>Experiencia Laboral</h2>

      <div
        className={`${darkMode ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-white border-gray-400 text-gray-700"} rounded-lg border shadow-sm p-6`}
      >
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h3 className="text-2xl font-bold text-blue-500">Desarrollador Web React Trainee</h3>
          <div className={`flex items-center ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            <Calendar size={16} className="mr-1" />
            <span>15 de Diciembre 2023 - 15 de Marzo de 2024</span>
          </div>
        </div>

        <div className={`flex items-center mb-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
          <Briefcase size={16} className="mr-2" />
          <span>Publicidad Nicaragua</span>
          <MapPin size={16} className="ml-4 mr-1" />
          <span>Managua, Nicaragua</span>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover border rounded-sm border-gray-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mb-6`}>{project.description}</p>
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className={`inline-flex  items-center gap-2 h-9 px-3 text-sm rounded-md ${darkMode
                      ? "border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300"
                      : "border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-sm"
                      } border transition-colors`}
                  >
                    <ExternalLink size={16} />
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

