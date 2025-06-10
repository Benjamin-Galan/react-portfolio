"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Instagram, Github, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { contact, socials } from "../utils/data"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: "", message: "" })

    try {
      // Configurar EmailJS con las variables de entorno
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "bgaland0108@gmail.com",
          reply_to: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado exitosamente! Te responderé pronto.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-label">Hablemos</span>
          <h2 className="contact-title">Contacto</h2>
          <p className="contact-description">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Información de contacto</h3>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label-small">Email</span>
                <a href={`mailto:${contact.email}`} className="contact-value">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label-small">Teléfono</span>
                <a href={`tel:${contact.phone}`} className="contact-value">
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-details">
                <span className="contact-label-small">Ubicación</span>
                <span className="contact-value">{contact.city}</span>
              </div>
            </div>

            <div className="social-links">
              <h4 className="social-title">Sígueme</h4>
              <div className="social-icons">
                <a href={socials.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href={socials.github} className="social-link" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href={socials.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Tu nombre"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="tu@email.com"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Asunto *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="¿De qué quieres hablar?"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Cuéntame sobre tu proyecto..."
                required
                disabled={isLoading}
              ></textarea>
            </div>

            <button type="submit" className="form-submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="loading-spinner"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Enviar mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
