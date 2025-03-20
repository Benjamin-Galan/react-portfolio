import { MapPin, Mail, Phone, Instagram, Github, Linkedin } from "lucide-react"

export default function Contact() {
    return (
        <section className="py-16" id="contacto">
            <h2 className="text-4xl font-bold mb-12">Contacto</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                        <MapPin className="text-[#2196f3]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Ubicación</h3>
                        <p className="text-gray-400">Managua, Nicaragua</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                        <Mail className="text-[#2196f3]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <a href="mailto:begalan@outlook.es" className="text-gray-400 hover:text-[#2196f3] transition-colors">
                            begalan@outlook.es
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                        <Phone className="text-[#2196f3]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Teléfono</h3>
                        <a href="tel:+5058847632" className="text-gray-400 hover:text-[#2196f3] transition-colors">
                            +505 8847632
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                        <Instagram className="text-[#2196f3]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Instagram</h3>
                        <a href="https://www.instagram.com/benjidev_1/" className="text-gray-400 hover:text-[#2196f3] transition-colors">
                            @benjidev_1
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                        <Github className="text-[#2196f3]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Github</h3>
                        <a href="https://github.com/Benjamin-Galan" className="text-gray-400 hover:text-[#2196f3] transition-colors">
                            Benjamin-Galan
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-3 rounded-full">
                        <Linkedin className="text-[#2196f3]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/benjam%C3%ADn-gal%C3%A1n-d%C3%ADaz-9346ba297/" className="text-gray-400 hover:text-[#2196f3] transition-colors">
                            Benjamín Galán Díaz
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

