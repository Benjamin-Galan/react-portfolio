"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Navbar({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 py-4 border-b border-gray-800">
      <div className="container max-w-[1000px] px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            benja.dev
          </a>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#experiencia" className="text-gray-400 hover:text-white transition-colors">
              Experiencia
            </a>
            <a href="#proyectos" className="text-gray-400 hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#sobre-mi" className="text-gray-400 hover:text-white transition-colors">
              Sobre mí
            </a>
            <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
              Contacto
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 ml-2"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              <a
                href="#proyectos"
                className="text-gray-400 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </a>
              <a
                href="#experiencia"
                className="text-gray-400 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experiencia
              </a>
              <a
                href="#sobre-mi"
                className="text-gray-400 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre mí
              </a>
              <a
                href="#contacto"
                className="text-gray-400 hover:text-white transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

