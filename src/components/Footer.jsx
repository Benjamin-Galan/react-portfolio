export default function Footer() {
    return (
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
          <a href="/" className="text-xl font-bold">
            benja.dev
          </a>
          </div>
  
          <nav className="flex justify-center gap-6 mb-6">
            <a href="#proyectos" className="text-gray-400 hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#experiencia" className="text-gray-400 hover:text-white transition-colors">
              Experiencia
            </a>
            <a href="#sobre-mi" className="text-gray-400 hover:text-white transition-colors">
              Sobre mí
            </a>
            <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
              Contacto
            </a>
          </nav>
  
          
        </div>
      </footer>
    )
  }
  
  