import { MapPin, Mail, Phone, Instagram, Github, Linkedin } from "lucide-react"

export default function Contact({ darkMode }) {
    return (
        <section className="py-16" id="contacto">
            <h2 className={`text-4xl font-bold mb-12 ${darkMode ? "text-white" : "text-gray-900"}`}>Contacto</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-3">
                    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-3 rounded-full`}>
                        <MapPin className="text-blue-500" />
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Ubicación</h3>
                        <p className={darkMode ? "text-gray-400" : "text-gray-500"}>Managua, Nicaragua</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-3 rounded-full`}>
                        <Mail className="text-blue-500" />
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Email</h3>
                        <a
                            href="mailto:begalan@outlook.es"
                            className={`${darkMode ? "text-gray-400 hover:text-blue-500" : "text-gray-500 hover:text-blue-600"} transition-colors`}
                        >
                            begalan@outlook.es
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-3 rounded-full`}>
                        <Phone className="text-blue-500" />
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Teléfono</h3>
                        <a
                            href="tel:+5058847632"
                            className={`${darkMode ? "text-gray-400 hover:text-blue-500" : "text-gray-500 hover:text-blue-600"} transition-colors`}
                        >
                            +505 8847632
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-3">
                    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-3 rounded-full`}>
                        <Instagram className="text-blue-500" />
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Instagram</h3>
                        <a
                            href="https://www.instagram.com/benjidev_1/"
                            className={`${darkMode ? "text-gray-400 hover:text-blue-500" : "text-gray-500 hover:text-blue-600"} transition-colors`}
                        >
                            @benjidev_1
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-3 rounded-full`}>
                        <Github className="text-blue-500" />
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Github</h3>
                        <a
                            href="https://github.com/Benjamin-Galan"
                            className={`${darkMode ? "text-gray-400 hover:text-blue-500" : "text-gray-500 hover:text-blue-600"} transition-colors`}
                        >
                            Benjamin-Galan
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-3 rounded-full`}>
                        <Linkedin className="text-blue-500" />
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>LinkedIn</h3>
                        <a
                            href="https://www.linkedin.com/in/benjam%C3%ADn-gal%C3%A1n-d%C3%ADaz-9346ba297/"
                            className={`${darkMode ? "text-gray-400 hover:text-blue-500" : "text-gray-500 hover:text-blue-600"} transition-colors`}
                        >
                            Benjamín Galán Díaz
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

