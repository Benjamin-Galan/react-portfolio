import { about } from "../utils/data"

export default function About() {
  return (
    <section className="about-section" id="sobre-mi">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <span className="about-label">Conoce más</span>
            <h2 className="about-title">Sobre mí</h2>
          </div>

          <div className="about-text">
            <p>{about}</p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">1+</span>
              <span className="highlight-text">Año de experiencia</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">5+</span>
              <span className="highlight-text">Proyectos completados</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">10+</span>
              <span className="highlight-text">Tecnologías dominadas</span>
            </div>
          </div>
        </div>

        <div className="about-image">
          <div className="image-placeholder">
            <div className="code-snippet">
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable"> developer</span>
                <span className="code-operator"> = </span>
                <span className="code-string">{"{"}</span>
              </div>
              <div className="code-line code-indent">
                <span className="code-property">name:</span>
                <span className="code-string"> 'Benjamín Galán'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">role:</span>
                <span className="code-string"> 'Full Stack Developer'</span>,
              </div>
              <div className="code-line code-indent">
                <span className="code-property">passion:</span>
                <span className="code-string"> 'Clean Code'</span>,
              </div>
              <div className="code-line">
                <span className="code-string">{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
