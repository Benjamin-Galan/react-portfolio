import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience({ darkMode }) {
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

        <div className="space-y-3">
          <p>
            Como desarrollador web React trainee, obtuve experiencia práctica en el desarrollo de aplicaciones web
            modernas aplicando los conocimientos aprendidos en React y tecnologías relacionadas.
          </p>
          <p>Mis responsabilidades incluyeron:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Desarrollo de componentes React reutilizables</li>
            <li>Implementación de interfaces de usuario responsivas</li>
            <li>Integración con APIs y servicios externos</li>
            <li>Colaboración en proyectos de desarrollo web para clientes</li>
            <li>Aprendizaje continuo de nuevas tecnologías y mejores prácticas</li>
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className={`inline-block ${darkMode ? "bg-blue-900/40 text-blue-300" : "bg-blue-100 text-blue-700"} text-xs px-2 py-1 rounded`}
          >
            React
          </span>
          <span
            className={`inline-block ${darkMode ? "bg-yellow-900/40 text-yellow-300" : "bg-yellow-100 text-yellow-700"} text-xs px-2 py-1 rounded`}
          >
            JavaScript
          </span>
          <span
            className={`inline-block ${darkMode ? "bg-purple-900/40 text-purple-300" : "bg-purple-100 text-purple-700"} text-xs px-2 py-1 rounded`}
          >
            CSS
          </span>
          <span
            className={`inline-block ${darkMode ? "bg-green-900/40 text-green-300" : "bg-green-100 text-green-700"} text-xs px-2 py-1 rounded`}
          >
            Git
          </span>
        </div>
      </div>
    </section>
  )
}

