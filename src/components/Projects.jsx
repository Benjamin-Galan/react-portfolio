import { Code, ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "PayStore",
        image: "/paystore.jpeg?height=300&width=500",
        description:
            "Una web para la venta de un software de crédito, permitiendo a los usuarios crear cuentas y seleccionar módulos según sus necesidades.",
        technologies: ["React", "JavaScript Vanilla", "Tailwind CSS"],
        codeLink: "#",
        demoLink: "#",
    },
    {
        id: 2,
        title: "DevTools Hub",
        image: "/devtools.webp?height=300&width=500",
        description:
            "DevTools Hub es un sitio web que contiene una colección de enlaces y herramientas que están en la web, muy útiles para desarrolladores, programadores o diseñadores.",
        technologies: ["JavaScript", "HTML", "CSS"],
        codeLink: "#",
        demoLink: "#",
    },
    {
        id: 3,
        title: "DevStagram",
        image: "/devstagram.jpeg?height=300&width=500",
        description:
            "Un pequeño clon de Instagram hecho en Laravel. Puedes crear tu cuenta, editar tu perfil, seguir y ver tus seguidores. Además puedes compartir fotos, comentar y dar likes a publicaciones",
        technologies: ["Laravel", "PHP", "MySQL"],
        codeLink: "#",
        demoLink: "#",
    },

]

export default function Projects() {
    return (
        <section className="py-16 " id="proyectos">
            <h2 className="text-4xl font-bold mb-12">Proyectos</h2>
            <div className="space-y-16">
                {projects.map((project) => (
                    <div key={project.id} className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
                            <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={500}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-[#ffd54f] mb-2">{project.title}</h3>
                            <div className="flex gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="inline-block bg-gray-800 text-xs px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6">{project.description}</p>
                            <div className="flex gap-3">
                                <a
                                    href={project.codeLink}
                                    className="inline-flex items-center gap-2 h-9 px-3 text-sm rounded-md border border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300 transition-colors"
                                >
                                    <Code size={16} />
                                    Código
                                </a>
                                <a
                                    href={project.demoLink}
                                    className="inline-flex items-center gap-2 h-9 px-3 text-sm rounded-md border border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300 transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    Visitar
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

