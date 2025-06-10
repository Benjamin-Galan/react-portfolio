import { experience } from "../utils/data"
import { Calendar, Briefcase, ChevronRight } from "lucide-react"

export default function Experience() {
  return (
    <section className="experience-section" id="experiencia">
      <div className="experience-container">
        <div className="experience-header">
          <span className="experience-label">Mi trayectoria</span>
          <h2 className="experience-title">Experiencia</h2>
          <p className="experience-description">Mi recorrido profesional y los proyectos que han formado mi carrera</p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={20} />
                </div>
                <div className="timeline-line"></div>
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-date">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="timeline-body">
                  <ul className="timeline-achievements">
                    {item.achieves.map((achieve) => (
                      <li key={achieve.id} className="timeline-achievement">
                        <ChevronRight size={16} className="achievement-icon" />
                        <span>{achieve.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
