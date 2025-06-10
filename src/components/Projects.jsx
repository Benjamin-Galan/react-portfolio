import { ExternalLink, Github } from "lucide-react"
import { projects } from "../utils/data"

export default function Projects() {
  return (
    <section className="projects-section" id="proyectos">
      <div className="projects-container">
        <div className="projects-header">
          <span className="projects-label">Mi trabajo</span>
          <h2 className="projects-title">Proyectos</h2>
          <p className="projects-description">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image_path || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.demo_path}
                      className="project-link demo-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.code_path}
                      className="project-link code-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      <tech.icon size={16} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
