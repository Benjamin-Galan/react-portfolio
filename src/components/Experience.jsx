import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience() {
    return (
        <section className="py-16" id="experiencia">
            <h2 className="text-4xl font-bold mb-12">Experiencia Laboral</h2>

            <div className="rounded-lg border border-gray-700 bg-gray-800/50 text-gray-100 shadow-sm p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#2196f3]">Desarrollador Web React Trainee</h3>
                    <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-1" />
                        <span>15 de Diciembre 2023 - 15 de Marzo de 2024</span>
                    </div>
                </div>

                <div className="flex items-center mb-4 text-gray-400">
                    <Briefcase size={16} className="mr-2" />
                    <span>Publicidad Nicaragua</span>
                    <MapPin size={16} className="ml-4 mr-1" />
                    <span>Managua, Nicaragua</span>
                </div>

                <div className="space-y-3 text-gray-300">
                    <p>
                        Como desarrollador web React trainee, estoy obtuve experiencia práctica en el desarrollo de
                        aplicaciones web modernas aplicando los conocimientos aprendidos en React y tecnologías relacionadas.
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
                    <span className="inline-block bg-blue-900/40 text-blue-300 text-xs px-2 py-1 rounded">React</span>
                    <span className="inline-block bg-yellow-900/40 text-yellow-300 text-xs px-2 py-1 rounded">JavaScript</span>
                    <span className="inline-block bg-purple-900/40 text-purple-300 text-xs px-2 py-1 rounded">CSS</span>
                    <span className="inline-block bg-green-900/40 text-green-300 text-xs px-2 py-1 rounded">Git</span>
                </div>
            </div>
        </section>
    )
}

