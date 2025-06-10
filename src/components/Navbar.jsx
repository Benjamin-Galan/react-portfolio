"use client"

import { useState, useEffect } from "react"
import { navlinks } from "../utils/data"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Controla el estado de scroll para cambiar la apariencia de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determinar qué sección está activa basado en la posición de scroll
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100 // Offset para mejor detección

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Inicializar al cargar

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Cierra el menú móvil después de hacer clic en un enlace
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Prevenir scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Cleanup al desmontar el componente
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <a href="#" className="navbar-logo">
            benja<span>.dev</span>
          </a>

          {/* Navegación para desktop */}
          <nav className="navbar-nav">
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className={`navbar-link ${activeSection === link.path.substring(1) ? "active" : ""}`}
              >
                <span className="navbar-link-text">{link.title}</span>
              </a>
            ))}
          </nav>

          {/* Botón de menú móvil */}
          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay para el menú móvil */}
      {isOpen && <div className="navbar-overlay" onClick={() => setIsOpen(false)} />}

      {/* Menú móvil */}
      <div className={`navbar-mobile ${isOpen ? "open" : ""}`}>
        <nav className="navbar-mobile-nav">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={`navbar-mobile-link ${activeSection === link.path.substring(1) ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              <span className="navbar-mobile-text">{link.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
