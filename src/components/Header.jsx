
import { MailOpenIcon as Envelope, Linkedin } from "lucide-react"

export default function Header({ darkMode }) {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center py-16 gap-8">
            <div className="relative max-w-[1100px] w-40 h-40 overflow-hidden rounded-full border-4 border-[#2196f3]">
                <img
                    src="/perfil-960.webp?height=160&width=160"
                    alt="Benja"
                    width={160}
                    height={160}
                    className="object-cover"
                />
            </div>
            <div className="text-center md:text-left max-w-md">
                <h1 className="text-3xl font-bold text-[#2196f3] mb-2">Hola, soy Benja</h1>

                <p className={`${darkMode ? 'text-white' : "text-gray-700"} text-lg mb-3`}>
                    Ingeniero de Sistemas y Desarrollador de aplicaciones web. Estoy entusiasmado por contribuir a proyectos
                    desafiantes. ¡No dudes en contactarme!
                </p>

                <div className="flex gap-3 justify-center md:justify-start">
                    <a
                        href="#contacto"
                        className={`${darkMode ? 'bg-[#2196f3] text-white' : 'bg-gray-800 text-gray-300'} inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors`}
                    >
                        <Envelope size={18} />
                        Contáctame
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${darkMode ? 'bg-[#2196f3] text-white' : 'bg-gray-800 text-gray-300'} inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors`}
                    >
                        <Linkedin size={18} />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

