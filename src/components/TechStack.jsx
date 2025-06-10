import { techStack } from "../utils/data"

export default function TechStack() {
  return (
    <section className="tech-section" id="tecnologias">
      <div className="tech-container">
        <div className="tech-header">
          <span className="tech-label">Mi arsenal</span>
          <h2 className="tech-title">Tecnologías</h2>
          <p className="tech-description">
            Herramientas y tecnologías que utilizo para crear experiencias digitales excepcionales
          </p>
        </div>

        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">
                <tech.icon size={40} />
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-category">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
