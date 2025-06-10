import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">benja.dev</h3>
            <p className="footer-tagline">Creando experiencias digitales excepcionales</p>
          </div>

          <nav className="footer-nav">
            <div className="footer-section">
              <h4 className="footer-section-title">Navegación</h4>
              <ul className="footer-links">
                <li>
                  <a href="#sobre-mi">Sobre mí</a>
                </li>
                <li>
                  <a href="#tecnologias">Tecnologías</a>
                </li>
                <li>
                  <a href="#experiencia">Experiencia</a>
                </li>
                <li>
                  <a href="#proyectos">Proyectos</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">Contacto</h4>
              <ul className="footer-links">
                <li>
                  <a href="#contacto">Formulario</a>
                </li>
                <li>
                  <a href="mailto:bgaland0108@gmail.com">Email</a>
                </li>
                <li>
                  <a href="tel:+50588476321">Teléfono</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 Benjamín Galán. Hecho con <Heart size={16} className="heart-icon" /> y mucho café
          </p>
        </div>
      </div>
    </footer>
  )
}
